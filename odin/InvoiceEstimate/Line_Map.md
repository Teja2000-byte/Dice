# Verified source lines - Invoice Estimate

These references apply to the exact input 1.html in this kit and its Save As output copy. Each repair replaces one line with one line, so all numbers remain fixed.

| Line | Existing statement or control | Recorded edit |
| --- | --- | --- |
| 30 | Subtotal input: required, min 0.01, max 9999.99, step 0.01 | Preserve |
| 32 | Discount input: required, min 0, max 100, step 1 | Preserve |
| 34 | Tax rate input: required, min 0, max 100, step 1 | Preserve |
| 48 | calculateEstimate starts | Preserve |
| 53 | const discountCents = Math.round(subtotalCents * discountRate / 100); | Preserve |
| 54 | const taxableCents = subtotalCents; | const taxableCents = subtotalCents - discountCents; |
| 55 | const taxCents = Math.floor(taxableCents * taxRate / 100); | const taxCents = Math.round(taxableCents * taxRate / 100); |
| 56 | const totalCents = subtotalCents + discountCents + taxCents; | const totalCents = taxableCents + taxCents; |

The result table is below Calculate estimate. Its rows run Discount amount, Taxable amount, Tax, Estimated total. The three fields run Subtotal, Discount, Tax rate from top to bottom. Word wrap changes visual rows, not physical source lines. If you format the source or insert extra lines, use the actual current gutter number and anchor instead of the old reference.
