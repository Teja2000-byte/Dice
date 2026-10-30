# Invoice Estimate Requirements

This is a synthetic local USD estimate. It does not issue an invoice, charge a payment, send a request or store data.

## Currency policy
- Convert the entered subtotal to integer cents before calculating amounts.
- Round the discount to the nearest cent, with a half cent rounding up.
- Subtract that rounded discount before calculating tax.
- Round tax to the nearest cent, with a half cent rounding up; do not always round down.
- Estimated total equals the discounted taxable amount plus the rounded tax.
- Show all monetary results with two decimal places. Do not change the policy or existing HTML controls.

## Existing field validation
- Subtotal is required, from 0.01 through 9999.99 USD, in cent steps.
- Discount and Tax rate are required integer percentages from 0 through 100.
- Preserve the form's native browser validation. An invalid form must not run a new calculation.
- Old results may remain after a blocked submission; the page labels them as the last successful calculation.

## Acceptance groups
Results are listed as Discount amount / Taxable amount / Tax / Estimated total, in USD.

### E01 - Ordinary discount and tax
Subtotal: 100.00; Discount: 10; Tax rate: 10.
Expected: 10.00 / 90.00 / 9.00 / 99.00.

### E02 - Half-cent tax rounding
Subtotal: 0.03; Discount: 0; Tax rate: 50.
Expected: 0.00 / 0.03 / 0.02 / 0.05.

### E03 - Discount rounding before tax
Subtotal: 19.99; Discount: 10; Tax rate: 5.
Expected: 2.00 / 17.99 / 0.90 / 18.89.

### E04 - Full discount
Subtotal: 12.34; Discount: 100; Tax rate: 10.
Expected: 12.34 / 0.00 / 0.00 / 0.00.

### E05 - Zero percentage rates
Subtotal: 12.34; Discount: 0; Tax rate: 0.
Expected: 0.00 / 12.34 / 0.00 / 12.34.

### E06 - Native browser validation
1. Clear Subtotal; keep Discount at 0 and Tax rate at 0; click Calculate estimate. The browser must block submission at Subtotal.
2. Restore Subtotal to 12.34; set Discount to 101 and Tax rate to 0; click Calculate estimate. The browser must block submission at Discount.
3. Set Discount to 0 and Tax rate to -1; click Calculate estimate. The browser must block submission at Tax rate.
No new result is calculated in these three checks. The result table can retain its previous successful values.

## Final file
Preserve both inputs. During recording, use Save As to create final output 1.html. Deliver that exact saved standalone file.
