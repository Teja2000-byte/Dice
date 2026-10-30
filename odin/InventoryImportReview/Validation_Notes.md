# Final script/input verification

## Scope

The current Recording_Script_ColorBlocks_FINAL.md and rendered FINAL.pdf were cross-checked against the exact input 1.html, input 2.md and Goal.pdf delivered in the current recorder ZIPs. Both original input checksums are unchanged. This verifies file/logic consistency, not a completed recording or external Studio approval of input provenance.

## Corrections from the full cross-check

- Replaced leftover reset-behavior wording: this tool has no Reset button. The instructions now refer to validation, preview clearing and recovery.
- Corrected the baseline header edit: the header is text inside the single Inventory rows textarea, not a separate field control.
- Added explicit Markdown source-view and word-wrap setup. The brief must show source gutter lines and code fences; rendered preview is unsuitable for following these line references.
- Shortened the spoken intro to 33 words and minimized the Goal PDF window instead of closing its last browser tab. Its actual duration still needs rehearsal.
- Clarified that VS Code file lines and Firefox batch-error line numbers are different numbering contexts. I03's Markdown copy lines are 52-54; its duplicate error refers to pasted batch line 3.
- Distinguished raw BOM/line-ending parser checks from textarea behavior, since native textareas can normalize line endings.

- Replaced heading-only pointing cues with exact source lines and quoted phrases. "Point" means hover, without clicking or editing. Format rules are at lines 6-9; business rules at 13-16; batch rules at 20-21.

## Verified alignment

- Original HTML: 105 physical lines. Requirements Markdown: 140 physical lines.
- All 81 mapped anchors match the actual original, intermediate or completed source state.
- All nine code-edit blocks match the line numbers and code they describe.
- Replacing only the validation stub, then adding the preview-clearing statement, reproduces the tested 120-line completed page. That completed test file is scratch-only and excluded from recording packages.
- All twelve acceptance groups' data selections and expected results match the real requirements brief. The valid-invalid-valid group deliberately reuses I01 and I03.
- Goal.pdf contains one page and the exact approved Goal. TaskRecorder fields contain the same Goal.
- All 297 nonempty instruction/code lines or paragraphs from the Markdown guide are present in the rendered 24-page PDF after removing only presentation markup and whitespace.
- The epilogue contains 394 spoken words; rehearse it aloud to reach the intended clear, natural 3-4 minute reflection without exceeding four minutes.

## Fresh browser execution

The completed page used in this check was reconstructed directly from the current guide, not taken from the earlier reference implementation. Cloud Chromium blocks file URLs, so only these authorized HTML pages were served through a loopback test server, with external requests blocked. Browser page errors and unintended external requests were checked.

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
- PASS raw parser BOM/CRLF/LF/CR checks, blank/non-finite values, physical error lines and mixed structural/business rejection.
- PASS native focus and keyboard button activation.
- PASS no page JavaScript errors or external requests; loopback HTTP only at a 680 px browser viewport. Local file navigation is blocked by the cloud browser policy, so Mac Firefox file opening remains to be verified.
- PASS original input checksums unchanged after validation.

## Remaining verification on the Mac

Native Firefox file opening, actual macOS window/menu positions, microphone/noise, clear live narration, actual recording duration, screenshot/archive integrity and Studio AutoQC remain checks for the user's Mac and actual attempt. A cloud Chromium check does not establish Firefox or recording approval. Source provenance remains documented accurately in SOURCE_PROVENANCE.txt.

The current full kit includes only the original incomplete inputs, Goal.pdf and offscreen guidance. No completed final HTML, final Metadata.rtf or Deliverables.zip is supplied before recording.
