# Proposed task - verification

The two incorrect starter results and all six acceptance groups were executed in system Chromium through a loopback-only HTTP server. External requests were blocked. The same control order and a 680 px layout were checked. Native Firefox file opening and the actual Mac recording have not been exercised here.

Expected currency values were independently verified with Python Decimal half-up rounding. The completed HTML used for tests is scratch-only, outside the repository and excluded from the package. It is reproduced by the three exact line replacements on 54-56; no original input is changed.

- PASS both scripted baseline errors: 120.00 ordinary total; 0.01 tax and 0.04 total for half-cent case.
- PASS E01: 10.00 / 90.00 / 9.00 / 99.00
- PASS E02: 0.00 / 0.03 / 0.02 / 0.05
- PASS E03: 2.00 / 17.99 / 0.90 / 18.89
- PASS E04: 12.34 / 0.00 / 0.00 / 0.00
- PASS E05: 0.00 / 12.34 / 0.00 / 12.34
- PASS E06: required subtotal, discount maximum and tax minimum block native form submission; old result remains labeled as last successful.
- PASS final valid restore and no accumulated state.
- PASS control order, readable 680 px layout, no horizontal overflow, no page errors or external requests, and unchanged inputs.

Every SAY block is a complete literal speech string in quotes, with no placeholders or instructions to improvise. Success statements are gated by separate CHECK blocks. The main reflection has 370 spoken words; actual duration must be rehearsed. The planned main workflow is about 22:45, not a measured time or guarantee.

The new idea is not yet approved in Studio. Task approval, source-preparation acceptance, recording quality and AutoQC are not established by these local checks.
