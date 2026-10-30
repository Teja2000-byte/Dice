# Parcel Box Planner Requirements

This is a synthetic offline plan. It books no shipment, sends no request and stores no data.

## Packing policy
- Use identical boxes with the stated whole-number capacity. Pack all items.
- Full boxes is the whole-number quotient: round Items to pack divided by Items per box down.
- Items in partial box is the remainder. An exact fit has zero items in a partial box.
- Boxes needed is the quotient rounded up. Do not add another box for an exact fit.
- Total slots equals Boxes needed multiplied by Items per box.
- Unused slots equals Total slots minus Items to pack. It must never be negative for valid inputs.
- Show the five results as whole numbers. Keep the existing controls and labels.

## Existing browser validation
- Items to pack is required, from 1 through 10000, in whole-number steps.
- Items per box is required, from 1 through 500, in whole-number steps.
- Preserve native browser validation. Invalid input must not run a new calculation.
- Old results may remain after a blocked submission; they are the last successful calculation.

## Seven acceptance groups
Results are listed as Full boxes / Items in partial box / Boxes needed / Total slots / Unused slots.

### P01 - Partial final box
Items to pack: 23; Items per box: 6.
Expected: 3 / 5 / 4 / 24 / 1.

### P02 - Exact fit
Items to pack: 24; Items per box: 6.
Expected: 4 / 0 / 4 / 24 / 0.

### P03 - One item
Items to pack: 1; Items per box: 6.
Expected: 0 / 1 / 1 / 6 / 5.

### P04 - One item per box
Items to pack: 9; Items per box: 1.
Expected: 9 / 0 / 9 / 9 / 0.

### P05 - Box larger than order
Items to pack: 7; Items per box: 20.
Expected: 0 / 7 / 1 / 20 / 13.

### P06 - Large valid order
Items to pack: 10000; Items per box: 64.
Expected: 156 / 16 / 157 / 10048 / 48.

### P07 - Native validation and recovery
1. Clear Items to pack; set Items per box to 6; click Calculate boxes. The browser must block submission at Items to pack.
2. Restore Items to pack to 23; set Items per box to 0; click Calculate boxes. The browser must block submission at Items per box.
3. Restore Items per box to 6; set Items to pack to 2.5; click Calculate boxes. The browser must block submission because the item count is not a whole number.
No new calculation runs in these three checks; the last valid result may remain visible.
4. Restore Items to pack to 23 and Items per box to 6; calculate again. Expected: 3 / 5 / 4 / 24 / 1.

## Final file
Preserve both inputs. During recording, use Save As to create final output 1.html. Deliver that exact saved standalone HTML file.
