# Inventory Import Review Requirements

This is a synthetic, local-only review tool. No real inventory is imported, saved or transmitted.

## Format
Use three pipe-separated fields per line. This is a bounded plain-text format, not general CSV: quoted delimiters and multiline fields are outside scope.
The first nonblank line must be item_id|location|quantity. Header names are case-sensitive; trim surrounding whitespace on each field.
Ignore blank lines. Accept LF, CRLF, lone CR and an optional leading UTF-8 BOM. Error line numbers refer to physical source lines, including blanks.
Every nonblank data line must contain exactly three fields. Trim surrounding whitespace from every value.
At least one data row is required. Report structural errors and continue checking other rows. A bad header needs only a header error.

## Business rules
Require a nonempty item ID and location. Normalize item IDs to uppercase before comparing and previewing them.
Duplicate normalized IDs reject the whole batch, even when their locations or quantities differ.
Quantity strings must contain ASCII digits only and represent an integer from 0 through 9999 inclusive.
Blank, negative, fractional, exponent, nonnumeric and over-limit quantities are invalid. Zero and leading zeros are valid; display the parsed number.
Collect all field-level issues on structurally valid rows, using their original source line numbers.

## Batch acceptance and preview
If any parse or business error exists, reject the entire batch and show no preview rows.
Clear old preview rows and old errors before each new review. Corrected input must work without accumulating rows or retaining old errors.
Render cell values with safe text nodes or textContent. Markup-like input must appear literally, never as interpreted HTML.
Retain labels, a live status region, table headers and a readable error list. The page must remain self-contained, with no external assets, requests or storage.
Success: Validated N rows (T total units). Local review only; nothing imported.
Failure: Rejected: N issue(s). No rows imported.

## Twelve acceptance groups

### I01 - Normalize a valid batch

```text
item_id|location|quantity
 a101 | North store | 3
B202|Loading bay|2
```

Expected: Two preview rows: A101 / North store / 3 and B202 / Loading bay / 2. Status: Validated 2 rows (5 total units). Local review only; nothing imported. No errors.

### I02 - Zero and leading-zero quantities

```text
item_id|location|quantity
A101|North store|0
B202|Loading bay|003
```

Expected: Two rows, quantities 0 and 3; total 3. Zero is valid. Leading zeros normalize to numeric display.

### I03 - Duplicate IDs after trimming and uppercasing

```text
item_id|location|quantity
A101|North store|3
 a101 |Loading bay|2
```

Expected: No preview rows. One error: Line 3: duplicate item ID A101.

### I04 - Missing location and missing ID

```text
item_id|location|quantity
A101||3
|North store|2
```

Expected: No preview rows. Two errors: Line 2: location is required. / Line 3: item ID is required.

### I05 - Blank, fractional, negative and exponent quantities

```text
item_id|location|quantity
A101|North store|
B202|Bay|1.5
C303|Bay|-1
D404|Bay|1e2
```

Expected: No preview rows. Four quantity errors on physical lines 2, 3, 4 and 5. Each says quantity must be an integer from 0 to 9999.

### I06 - Wrong number of fields

```text
item_id|location|quantity
A101|North|3|extra
```

Expected: No preview rows. One error: Line 2: expected 3 fields.

### I07 - Wrong header

```text
id|location|quantity
A101|North|3
```

Expected: No preview rows. One error: Use header: item_id|location|quantity.

### I08 - Header without data rows

```text
item_id|location|quantity
```

Expected: No preview rows. One error: Enter at least one data row.

### I09 - Markup-like location is literal text

```text
item_id|location|quantity
A101|<b>Store</b>|2
```

Expected: One row, total 2; location displays the literal characters <b>Store</b>, rather than bold Store. No markup is executed.

### I10 - Valid-invalid-valid recovery

Expected: Run I01, then I03, then I01 again. Observe two rows / no rows with one duplicate error / exactly two rows with no errors. No old preview or error survives the next review.

### I11 - Blank lines, trimmed header and line endings

```text

 item_id | location | quantity

 a101 | North store | 3
B202|Loading bay|2

```

Expected: Two normalized rows, total 5, with no error. Parser must also accept CRLF and an optional leading UTF-8 BOM. Verify those parser properties in source and in offscreen validation; do not claim a Firefox CRLF/BOM check unless the actual input preserves those characters.

### I12 - Inclusive maximum and over-limit rejection

```text
item_id|location|quantity
A101|North|9999
```

Expected: First, 9999 is accepted as one row and total 9999. Then replace 9999 with 10000 and review again: no preview, one quantity error on Line 2.
