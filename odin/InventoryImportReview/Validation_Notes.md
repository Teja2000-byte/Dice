# Validation of generated recording inputs

The exact bundled starter and brief were generated in Codex at the user's request. Both remain unchanged after validation. The completed copy used for tests is kept outside the repository and is excluded from all recording packages.

## Execution evidence

The cloud Chromium installation blocks file URLs by policy. Without changing that policy, the exact HTML was served by a loopback-only test server. External browser requests were blocked during validation. This confirms HTML behavior in Chromium over local HTTP, not Mac Firefox file navigation or the user's recording environment.

- PASS baseline: duplicate batch accepted and subsequent header rejection retains two stale rows.
- PASS I01 normalized valid rows and total.
- PASS I02 zero and leading zeros.
- PASS I03 duplicate normalized IDs, no preview.
- PASS I04 required fields and physical error lines.
- PASS I05 blank/decimal/negative/exponent quantities.
- PASS I06 field count.
- PASS I07 header.
- PASS I08 empty batch.
- PASS I09 literal markup characters, no interpreted b element.
- PASS I10 valid-invalid-valid recovery.
- PASS I11 blank lines and header/field whitespace.
- PASS I12 inclusive maximum and over-limit rejection.
- PASS additional BOM/line-endings, blank/non-finite values and blank-line error numbering in browser.
- PASS native focus and keyboard button activation.
- PASS no page JavaScript errors or external requests; loopback HTTP only at a 680 px browser viewport. Local file navigation is blocked by the cloud browser policy, so Mac Firefox file opening remains to be verified.
- PASS original input checksums unchanged after validation.

All 80 guide line references were resolved from the exact original inputs and staged edits. A replacement-only validator edit, followed by insertion of rows clearing, reproduces the tested completed source. The input checksums and state-specific lines are listed in Location_And_Line_Map_FINAL.md.

Still performed on the user's Mac: native Firefox file opening and all on-camera acceptance checks; readable window layout at the chosen recording resolution; microphone/noise check; actual continuous recording, timed epilogue, archive validation and Studio AutoQCs. No claim is made that a recording or submission has already happened.
