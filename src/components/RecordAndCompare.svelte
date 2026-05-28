<script>
	import { Client } from '@gradio/client';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	// import AudioPlayer from './AudioPlayer.svelte';
	import AudioPlayer from './AudioPlayerCurtain.svelte';
	import WaveFormCircles from './WaveFormCircles.svelte';

	import defaultAnyaData from '../lib/data/7007951477993966853_trimmed_pitch-values.json';

	export let prompt = 'This is a breadmaker that does all the work for you.';
	export let anyaSrc = '/media/audio/7007951477993966853_trimmed.mp3';
	export let anyaPitchData = defaultAnyaData;

	let RecordRTC;
	let recorder;
	let stream;

	let recordData;
	let audioUrl = null;
	let recording = false;
	let clicked = false;
	let disabled = false;
	let hovered = false;
	let processing = false;
	let error = null;

	let currentTime = 0;
	let anyaTime = 0;

	async function startRecording() {
		stream = await navigator.mediaDevices.getUserMedia({ audio: true });
		recorder = new RecordRTC(stream, {
			type: 'audio',
			mimeType: 'audio/wav'
		});
		recorder.startRecording();
		recording = true;
		clicked = true;
	}

	async function stopRecording() {
		processing = true;
		error = null;

		recorder.stopRecording(async () => {
			try {
				const audioBlob = recorder.getBlob();
				const tempAudioUrl = URL.createObjectURL(audioBlob);
				stream.getTracks().forEach((track) => track.stop());

				const client = await Client.connect('dlaiu/pitch-processing');
				const result = await client.predict('/predict', {
					audio_file: audioBlob
				});

				const data = JSON.parse(result.data);
				recordData = data;
				audioUrl = tempAudioUrl;
			} catch (e) {
				error = 'Something went wrong processing your audio. Please try again.';
				disabled = false;
			} finally {
				processing = false;
			}
		});

		recording = false;
		clicked = false;
		disabled = true;
	}

	function toggleRecording() {
		recording = !recording;
		if (!recorder || recorder.getState() === 'inactive') {
			startRecording();
		} else if (recorder.getState() === 'recording') {
			stopRecording();
		}
	}

	onMount(() => {
		if (typeof window !== 'undefined') {
			const script = document.createElement('script');
			script.src = 'https://cdn.jsdelivr.net/npm/recordrtc@5.6.2/RecordRTC.min.js';
			script.async = true;
			script.onload = () => {
				RecordRTC = window.RecordRTC;
			};
			document.body.appendChild(script);
		}
	});

	function handleTimeUpdate(event) {
		currentTime = event.detail.currentTime;
	}

	function handleAnyaTimeUpdate(event) {
		anyaTime = event.detail.currentTime;
	}
</script>

<section>
	<div class="curtainSection">
		<div class="header">
			<p class="landing">Let's see if you sound like an influencer.</p>
			<p class="instructions">Record yourself reading this typical voiceover from an Amazon influencer.</p>
		</div>
		<button
			id="recordButton"
			aria-label={!recording ? 'record' : 'recording-active'}
			class:clicked
			class:active={recording}
			disabled={disabled}
			on:click={toggleRecording}
			on:mouseenter={() => (hovered = true)}
			on:mouseleave={() => (hovered = false)}
		></button>
		<p class="caption">"{prompt}"</p>
		{#if processing}
			<p class="content">Processing your audio…</p>
		{/if}
		{#if error}
			<p class="content error">{error}</p>
		{/if}
	</div>

	{#if audioUrl && recordData}
		<div class="comparison" transition:fly={{ y: 20, duration: 300, opacity: 0 }}>
			<p class="content">Now let's hear how Amazon influencer <a href="https://www.tiktok.com/@anya.bumag?lang=en">anya.bumag</a> sounds reading it.</p>

			<div class="hearIt">
				<p class="name">Anya:</p>
				<AudioPlayer src={anyaSrc} curtainRaiser={true} on:timeUpdate={handleAnyaTimeUpdate} />
				<WaveFormCircles data={anyaPitchData} currentTime={anyaTime} fillColor="black" curtain={true} />
			</div>
			<hr style="width:80%" />
			<div class="hearIt" transition:fly={{ y: 20, duration: 600, opacity: 0 }}>
				<p class="name">You:</p>
				<AudioPlayer src={audioUrl} curtainRaiser={true} on:timeUpdate={handleTimeUpdate} />
				<WaveFormCircles data={recordData} currentTime={currentTime} fillColor="black" curtain={true} />
			</div>
			<!-- <p class="content">Notice anything different? As a hint, we've highlighted what makes Anya's voice different.</p> -->
		</div>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1em;
		padding: 1em;
		background: var(--bg-2);
		border-radius: 1em;
	}

	.curtainSection {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1em;
		padding: 1em;
		width: 100%;
		min-height: 40vh;
	}

	.content {
		font-size: 1.2em;
		line-height: 1.5;
		font-family: 'Inter', sans-serif;
		margin: 20px;
	}

	button {
		width: 100px;
		aspect-ratio: 1;
		background-repeat: no-repeat;
		background-position: 50% 50%;
		border-radius: 50%;
		transition: background-image 0.3s ease-in-out;
	}

	button[aria-label='record'] {
		background-image: url(/record-compare/assets/record.svg);
	}

	button[aria-label='record']:hover {
		background-image: url(/record-compare/assets/record.svg);
		transform: scale(1.05);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	}

	button[aria-label='record'].clicked:hover {
		background-image: url(/record-compare/assets/record.svg);
		box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.2);
		transform: scale(0.98);
	}

	button[aria-label='recording-active'] {
		background-image: url(/record-compare/assets/pending.svg);
		background-color: #ff6961;
	}

	button[aria-label='recording-active']:hover {
		background-image: url(/record-compare/assets/pending.svg);
		transform: scale(1.05);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	}

	button[aria-label='recording-active'].clicked:hover {
		background-image: url(/record-compare/assets/pending.svg);
		box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.2);
		transform: scale(0.98);
	}

	.caption {
		font-style: italic;
		font-size: 1.2em;
		align-self: center;
	}

	.hearIt {
		display: flex;
		max-width: 60vw;
		justify-content: center;
		align-items: center;
	}

	.comparison {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 2em 0;
	}

	.header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1em;
	}

	.landing {
		font-size: clamp(1.8em, 7vw, 3.5em);
		font-weight: 600;
		text-align: center;
	}

	.instructions {
		font-size: 1.5em;
		font-weight: 400;
	}

	.name {
		font-size: 1.5em;
		font-weight: 600;
	}

	.error {
		color: #c0392b;
	}

	@media (max-width: 768px) {
		.hearIt {
			flex-direction: column;
			max-width: 95vw;
			align-items: flex-start;
			gap: 0.5em;
		}

		.landing,
		.instructions,
		.content,
		.caption,
		.name {
			text-align: center;
			width: 100%;
		}
	}
</style>
