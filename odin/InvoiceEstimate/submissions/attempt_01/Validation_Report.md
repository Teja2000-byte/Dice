# Invoice Estimate - uploaded output verification

The user reported Studio idea approval and then supplied the recorded output. The uploaded final output 1.html is preserved byte for byte. Only the three intended statements on source lines 54-56 differ from the starter; whitespace differences in those statements do not affect their arithmetic. The two packaged inputs match the original recording transfer kit byte for byte.

## Independent verification

The exact uploaded HTML was executed in Chromium using a loopback-only server with external requests blocked. These checks validate the supplied file; they do not establish which actions were recorded in native Firefox. No recording, archive, or quality-score result has been inspected.

- PASS both scripted baseline errors: 120.00 ordinary total; 0.01 tax and 0.04 total for half-cent case.
- PASS E01: 10.00 / 90.00 / 9.00 / 99.00
- PASS E02: 0.00 / 0.03 / 0.02 / 0.05
- PASS E03: 2.00 / 17.99 / 0.90 / 18.89
- PASS E04: 12.34 / 0.00 / 0.00 / 0.00
- PASS E05: 0.00 / 12.34 / 0.00 / 12.34
- PASS E06: required subtotal, discount maximum and tax minimum block native form submission; old result remains labeled as last successful.
- PASS final valid restore and no accumulated state.
- PASS control order, readable 680 px layout, no horizontal overflow, no page errors or external requests, and unchanged inputs.

## Package

The ZIP contains exactly input 1.html, input 2.md, and the unchanged final output 1.html at its root. Metadata is separate. No guide, completed reference solution, test report, or provenance note is included in the submission ZIP.

## SHA-256

- input 1.html: `11bcd528353f027073df4c1bdd376d050f14983681b382524af84bc3f53e6cc8`
- input 2.md: `d8c43f5cf28ab4f15e752956b6313e8b9380d6fc9f0955a39752e7237d56d941`
- final output 1.html: `1331a519b755b0d5059c95ccb2ad7e7e5409b517d0a5ad78360b90b8cf40e6a8`

## Recording details supplied by the user

The user confirmed: "Yes, followed the script and completed every check", including E01-E06 and all three E06 invalid-input checks. The metadata therefore uses the six chronological substantive app visits from the script: opening Goal in Firefox, creating the working copy in Visual Studio Code, inspecting the baseline in Firefox, modifying the copy in Visual Studio Code, testing in Firefox, and final saved-file review in Visual Studio Code. The two windows remain side by side during testing; the script does not prescribe repeated switches to the editor for individual tests. TaskRecorder start/stop controls are not represented as substantive task-app visits. This account is user-confirmed, not independently reconstructed from a reviewed video.

The metadata Request is identical to Goal.txt. Its Topology uses the previously requested single-paragraph arrow format.
