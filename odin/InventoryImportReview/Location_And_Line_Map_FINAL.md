# Verified code and location map

This map applies only to the exact bundled inputs. Keep both inputs unchanged. Source code line numbers are absolute physical lines, not wrapped display rows. The mapping was generated from and checked against the actual starter and staged edits.

- B: unchanged input 2.md (140 lines).
- S0: unchanged input 1.html (105 lines), also the initial unmodified final output 1.html Save As copy.
- S1: final output 1.html after replacing the empty validateBatch body, before adding rowsEl.replaceChildren.
- S2: final output 1.html after adding rowsEl.replaceChildren; the intended completed file has 120 lines if no other formatting or blank-line changes occur.

The repaired/staged files used for validation are not in the recording package. Create the final output during recording.

## Input SHA-256

- input 1.html: `c634139a6aabcf4d64b73b1c209169195d377df0778255274dc8653074a6e0c6`
- input 2.md: `67e21bfbf6e1eae75ef77d0f7100eff909b456f82d4763097257c8a7915ff945`

## Exact anchors

| Source state and anchor | Verified physical line | Code or heading |
| --- | --- | --- |
| B.BATCH_RULE | 19 | `## Batch acceptance and preview` |
| B.BUSINESS_RULES | 12 | `## Business rules` |
| B.FORMAT | 5 | `## Format` |
| B.I01 | 29 | `### I01 - Normalize a valid batch` |
| B.I01_DATA_END | 34 | `B202\|Loading bay\|2` |
| B.I01_DATA_START | 32 | `item_id\|location\|quantity` |
| B.I02 | 39 | `### I02 - Zero and leading-zero quantities` |
| B.I02_DATA_END | 44 | `B202\|Loading bay\|003` |
| B.I02_DATA_START | 42 | `item_id\|location\|quantity` |
| B.I03 | 49 | `### I03 - Duplicate IDs after trimming and uppercasing` |
| B.I03_DATA_END | 54 | ` a101 \|Loading bay\|2` |
| B.I03_DATA_START | 52 | `item_id\|location\|quantity` |
| B.I04 | 59 | `### I04 - Missing location and missing ID` |
| B.I04_DATA_END | 64 | `\|North store\|2` |
| B.I04_DATA_START | 62 | `item_id\|location\|quantity` |
| B.I05 | 69 | `### I05 - Blank, fractional, negative and exponent quantities` |
| B.I05_DATA_END | 76 | `D404\|Bay\|1e2` |
| B.I05_DATA_START | 72 | `item_id\|location\|quantity` |
| B.I06 | 81 | `### I06 - Wrong number of fields` |
| B.I06_DATA_END | 85 | `A101\|North\|3\|extra` |
| B.I06_DATA_START | 84 | `item_id\|location\|quantity` |
| B.I07 | 90 | `### I07 - Wrong header` |
| B.I07_DATA_END | 94 | `A101\|North\|3` |
| B.I07_DATA_START | 93 | `id\|location\|quantity` |
| B.I08 | 99 | `### I08 - Header without data rows` |
| B.I08_DATA_END | 102 | `item_id\|location\|quantity` |
| B.I08_DATA_START | 102 | `item_id\|location\|quantity` |
| B.I09 | 107 | `### I09 - Markup-like location is literal text` |
| B.I09_DATA_END | 111 | `A101\|<b>Store</b>\|2` |
| B.I09_DATA_START | 110 | `item_id\|location\|quantity` |
| B.I10 | 116 | `### I10 - Valid-invalid-valid recovery` |
| B.I11 | 120 | `### I11 - Blank lines, trimmed header and line endings` |
| B.I11_DATA_END | 128 | `last data line (blank where specified)` |
| B.I11_DATA_START | 123 | `first data line (blank where specified)` |
| B.I12 | 133 | `### I12 - Inclusive maximum and over-limit rejection` |
| B.I12_DATA_END | 137 | `A101\|North\|9999` |
| B.I12_DATA_START | 136 | `item_id\|location\|quantity` |
| S0.BUTTON | 33 | `<button type="button" id="validateBtn">Review import</button>` |
| S0.CLEAR_ERRORS | 86 | `errorsEl.replaceChildren();` |
| S0.COMBINE_ERRORS | 88 | `const errors = [...parsed.errors, ...validateBatch(parsed.records)];` |
| S0.ERRORS | 35 | `<ul id="errors" aria-label="Validation errors"></ul>` |
| S0.FIELD_COUNT_CHECK | 59 | `if (fields.length !== 3) {` |
| S0.HANDLER_START | 85 | `function reviewImport() {` |
| S0.HEADER_CHECK | 52 | `if (first < 0 \|\| lines[first].split('\|').map(s => s.trim()).join('\|') !== 'item_id\|location\|quantity') {` |
| S0.HTML_CONTROLS_START | 28 | `<body>` |
| S0.PARSER_START | 48 | `function parseSource(text) {` |
| S0.RECORD_BUILD | 63 | `records.push({ number, id: fields[0], location: fields[1], rawQuantity: fields[2], quantity: Number(fields[2]) });` |
| S0.REJECT_RETURN | 96 | `return;` |
| S0.RENDERER_START | 73 | `function renderRows(records) {` |
| S0.RENDER_CALL | 98 | `renderRows(parsed.records);` |
| S0.ROWS | 40 | `<tbody id="rows"></tbody>` |
| S0.SAFE_CELL_TEXT | 78 | `td.textContent = value;` |
| S0.SOURCE | 32 | `<textarea id="source" spellcheck="false"></textarea>` |
| S0.STATUS | 34 | `<p id="status" role="status">No review yet.</p>` |
| S0.VALIDATOR_START | 69 | `function validateBatch(records) {` |
| S0.VALIDATOR_STUB | 70 | `return [];` |
| S1.CLEAR_ERRORS | 100 | `errorsEl.replaceChildren();` |
| S1.DUPLICATE_END | 77 | `}` |
| S1.DUPLICATE_ERROR | 76 | `errors.push(prefix + 'duplicate item ID ' + record.id + '.');` |
| S1.DUPLICATE_IF | 75 | `if (record.id && seen.has(record.id)) {` |
| S1.ERROR_PREFIX | 73 | `const prefix = 'Line ' + record.number + ': ';` |
| S1.HANDLER_START | 99 | `function reviewImport() {` |
| S1.NORMALIZE_ID | 72 | `record.id = record.id.toUpperCase();` |
| S1.QUANTITY_END | 82 | `}` |
| S1.QUANTITY_ERROR | 81 | `errors.push(prefix + 'quantity must be an integer from 0 to 9999.');` |
| S1.QUANTITY_IF | 80 | `if (!/^\d+$/.test(record.rawQuantity) \|\| record.quantity > 9999) {` |
| S1.RECORD_LOOP | 71 | `records.forEach(record => {` |
| S1.RECORD_LOOP_END | 83 | `});` |
| S1.REQUIRED_ID | 74 | `if (!record.id) errors.push(prefix + 'item ID is required.');` |
| S1.REQUIRED_LOCATION | 79 | `if (!record.location) errors.push(prefix + 'location is required.');` |
| S1.RETURN_ERRORS | 84 | `return errors;` |
| S1.SEEN_ADD | 78 | `if (record.id) seen.add(record.id);` |
| S1.VALIDATOR_END | 85 | `}` |
| S1.VALIDATOR_ERRORS | 70 | `const errors = [], seen = new Set();` |
| S1.VALIDATOR_START | 69 | `function validateBatch(records) {` |
| S2.CLEAR_ERRORS | 101 | `errorsEl.replaceChildren();` |
| S2.CLEAR_ROWS | 100 | `rowsEl.replaceChildren();` |
| S2.RENDERER_START | 87 | `function renderRows(records) {` |
| S2.SAFE_CELL_TEXT | 92 | `td.textContent = value;` |
| S2.SUCCESS_STATUS | 115 | `statusEl.textContent = 'Validated ' + parsed.records.length + ' rows (' + total + ' total units). Local review only; nothing imported.';` |
| S2.VALIDATOR_START | 69 | `function validateBatch(records) {` |

The table uses the code state at the moment described by the guide. The new validator shifts reviewImport from line 85 to line 99; inserting rows clearing adds a line at 100. If you make extra edits that move source lines, read and announce the actual current gutter number and anchor instead of repeating an outdated number.
