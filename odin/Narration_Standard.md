# Narration standard for Odin recording guides

User requirement: every instruction should be clear to a first-time listener. Use precise locations throughout all future guides.

## Current task-planning preference

Prepare manageable tasks for about 20-25 minutes including the required closing reflection. Prefer a small number of stable, single-line code edits and a short complete test matrix. Verify timing by rehearsal; do not extend the script with repetitive pointing or shorten it by skipping required checks.

Every SAY block contains only complete literal sentences the user can read aloud unchanged. Put actions, checks, conditions, alternative-path selection and troubleshooting directions outside SAY. Include no placeholders or instructions to improvise inside SAY. Gate any success statement with an external CHECK; the speaker must not read it after a failed result. A broad requirements overview can be natural prose, while code edits still require the exact current file and line.

## Code

Each coding instruction names the application, exact filename, actual current physical line number, neighboring code/function, exact action and purpose. Use source gutter numbers from the real files. Do not guess numbers from a generated reference or carry starter numbers into edited output. Recalculate after inserted/deleted lines or formatting changes. Point to the actual target as it is named. Before deleting a comment or TODO, identify its current line and exact text; name each deletion or an explicit contiguous range. Explain which adjacent executable statements must remain.

## Interface

Each interface instruction names the app, visible control label and position relative to visible neighboring content, then the action, reason and place to inspect the result. State the click type: say left-click for an ordinary primary click and name a right-click or double-click when used. Example for the proposed inventory layout: "In Firefox, I am left-clicking Review import directly below the Inventory rows text area to validate this batch. I will read the status immediately below that button, then inspect the error list and Preview table farther down the page." Repeat the field name and location on every test or return visit; a location named earlier does not explain a later silent field change.

## Navigation and selection

Before scrolling, name the app/window, scroll direction and intended section, test ID or verified source line. Before switching apps, name the destination app. For selections, identify the exact field or text boundaries. Announce any shortcut used. Use relative positions that match the actual layout at the recording resolution. Avoid standalone 'here', 'this', 'that', 'next line' and 'scroll down' without an identified target.

## Speech and errors

Speak in short, distinct sentences at normal playback speed. Say the action and location before or while acting, explain the reason, then state the actual visible result. Do not perform a series of silent clicks and describe them afterward. Normal brief thinking pauses are fine; repeated silent actions and rushed or mumbled speech are not. Use professional reasoning to connect actions rather than adding filler.

If an error appears, identify the observed message or behavior, app/file/control and location; state the cause only if established; explain the correction; perform it on camera and verify the result. If the cause is uncertain, say what you are checking. Never silently repair an error or invent one for the narration.

## Recording preparation

Record a short microphone check and listen back at normal speed. Use a quiet room, close room windows where practical, reduce fan/traffic/voice noise without disabling required equipment, and use a headset microphone if available. Recheck if the environment or microphone changes before the take. Do not edit noise out of a recorded submission.

Hide the browser bookmarks toolbar and check tabs, history suggestions and account/profile controls for project references or personal data. Quit unused apps and unpin unused Dock shortcuts before the take; keep TaskRecorder and Accessibility Inspector running and preserve required background/security services. Check the whole screen at the actual recording resolution, including the side Dock and menu bar.

## Epilogue and submission

Target 3-4 minutes, never over four. Cover completion and output, verification with actual observations, key decisions, real challenges or corrections, result quality and limitations, and improvements. Rehearse aloud; word count alone does not verify duration. Do not invent a challenge or extend the reflection with filler. After a re-record, rerun both AutoQC checks and the workflow checklist on the matching new artifacts; metadata-only changes do not automatically require a re-record.

## Finalization

A draft guide may contain clearly marked unresolved location fields. A recording-ready guide must contain verified numeric source lines, confirmed UI locators and no unresolved fields. Rehearse the instructions against the actual approved inputs and staged output, then regenerate the PDF. Observed results take precedence over expected script text.
