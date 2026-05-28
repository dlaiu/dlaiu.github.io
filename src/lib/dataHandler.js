function parseCSV(text) {
    const rows = [];
    let field = '';
    let row = [];
    let inQuotes = false;

    for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        const next = text[i + 1];

        if (inQuotes) {
            if (ch === '"' && next === '"') {
                field += '"';
                i++;
            } else if (ch === '"') {
                inQuotes = false;
            } else {
                field += ch;
            }
        } else {
            if (ch === '"') {
                inQuotes = true;
            } else if (ch === ',') {
                row.push(field);
                field = '';
            } else if (ch === '\n') {
                row.push(field);
                rows.push(row);
                field = '';
                row = [];
            } else if (ch === '\r') {
                // skip
            } else {
                field += ch;
            }
        }
    }
    if (field || row.length) {
        row.push(field);
        rows.push(row);
    }
    return rows;
}

function splitList(value) {
    return value ? value.split(';').map(s => s.trim()).filter(Boolean) : [];
}

function wrapParagraphs(text) {
    return text
        .split('\n')
        .filter(line => line.trim() !== '')
        .map(line => line.trimStart().startsWith('<') ? line : `<p>${line}</p>`)
        .join('\n');
}

export function dataHandler(csvText) {
    const rows = parseCSV(csvText);
    if (rows.length < 2) return { selectedItems: [], listItems: [] };

    const headers = rows[0].map(h => h.trim());
    const selectedItems = [];
    const listItems = [];

    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        if (row.length === 0 || (row.length === 1 && row[0] === '')) continue;

        const obj = {};
        headers.forEach((h, idx) => {
            obj[h] = (row[idx] ?? '').trim();
        });

        const item = {
            title: obj.title,
            description: obj.description,
            description_extended: obj.description_extended ? wrapParagraphs(obj.description_extended) : '',
            img_path: obj.img_path,
            link: obj.link,
            tags: splitList(obj.tags),
            categories: splitList(obj.categories),
        };

        if (obj.section === 'Selected Work') {
            selectedItems.push(item);
        } else {
            listItems.push(item);
        }
    }

    return { selectedItems, listItems };
}
