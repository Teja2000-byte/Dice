# Verified line map - Parcel Box Planner

These are physical source lines in the supplied input 1.html and its Save As output copy. Each edit replaces one statement with one statement and preserves its existing newline. Do not format the file or insert/delete source lines.

| Line | Starter control or statement | Action |
| --- | --- | --- |
| 29 | Items to pack: required, min 1, max 10000, step 1 | Preserve |
| 31 | Items per box: required, min 1, max 500, step 1 | Preserve |
| 47 | function calculatePacking(event) starts | Inspect |
| 51 | const fullBoxes = Math.floor(itemCount / boxSize); | Preserve |
| 52 | `const partialItems = itemCount - fullBoxes;` | `const partialItems = itemCount % boxSize;` |
| 53 | `const boxesNeeded = Math.floor(itemCount / boxSize);` | `const boxesNeeded = Math.ceil(itemCount / boxSize);` |
| 54 | `const totalSlots = boxesNeeded + boxSize;` | `const totalSlots = boxesNeeded * boxSize;` |
| 55 | `const unusedSlots = itemCount - totalSlots;` | `const unusedSlots = totalSlots - itemCount;` |

The top field is Items to pack, below the note. Items per box is directly below it. Calculate boxes is below the second field. The result table below the button runs Full boxes, Items in partial box, Boxes needed, Total slots, Unused slots. A live status line is below the table. Keep VS Code left and Firefox right throughout the recording.

If formatting or inserted/deleted source lines change the real gutter numbers, the narration must match the real file before recording. Word wrap creates visual rows without changing physical source line numbers.
