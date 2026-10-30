# Invoice Estimate - 20-25 minute recording script

PREPARED FOR IDEA APPROVAL. Submit Studio_Proposal.txt first. Record only after the Goal, apps and supplied materials are approved. This script is verified against the bundled files; it does not claim a recording has already happened.

Target: about 22 minutes, with room for normal interaction up to 25. Timing is a plan, not a measured recording. Rehearse on a disposable copy. Keep the two inputs unchanged and use a fresh recording folder with no final output.

Read aloud only the words in SAY blocks. Do not read the labels, timings, ACTION, EDIT, CHECK or IF WRONG text. SAY contains literal speech, not instructions to invent words. Read each result SAY only after its preceding CHECK matches the screen. The optional error section is used only if needed.

## Before the take - off screen

ACTION | Follow Preflight_Checklist.txt. Open Goal.pdf in Firefox. Prepare VS Code with the neutral Estimate_Record folder, source gutter numbers and word wrap. Disable format-on-save/type and automatic quote/bracket closing before the take. Keep the guide off screen. Inputs, Goal and apps must match the eventual approval. Complete native Firefox opening and microphone checks on the Mac.

## 1. Intro - 0:00-0:20

ACTION | Start TaskRecorder and minimize it immediately, leaving the Goal PDF visible in Firefox.
SAY | "I will be beginning my task soon. Here is the workflow I have in mind."
SAY | "I am minimizing Goal.pdf with Firefox's yellow top-left button, then left-clicking Visual Studio Code in the side Dock."
ACTION | Minimize the PDF window and bring VS Code forward. Keep the complete intro below 20 seconds.

## 2. Read the policy and preserve the starter - 0:20-3:00

SAY | "In Visual Studio Code's Explorer on the left, I am left-clicking input 2.md. I want to check the currency policy before changing the calculator."
ACTION | Open the Markdown source. Keep code fences and gutter lines visible; do not open rendered preview.
SAY | "The policy says to round the discount first, subtract it before tax, round tax to the nearest cent, and add that tax to the discounted amount. I will use those rules to check the result."
ACTION | Move the pointer over the Currency policy bullets as they are discussed. No individual line-by-line tour is needed.
SAY | "I am scrolling down in input 2.md to the acceptance groups. Five groups check the amounts, and the sixth checks the browser's required fields and percentage limits. I will complete every group."
ACTION | Scroll to E01-E06. Point briefly to E01, E02 and E06. Do not edit the brief.
SAY | "I am left-clicking input 1.html in the Explorer, then scrolling down to calculateEstimate on line 48, below the result table."
ACTION | Open the starter and scroll to lines 48-56.
SAY | "Line 53 already rounds the discount in cents. On line 54 the taxable amount still uses the full subtotal. Line 55 always rounds tax down. Line 56 adds the discount to the total. Those three formulas do not follow the policy."
ACTION | Point to each named line. Leave the original untouched.
SAY | "In Visual Studio Code's File menu at the top, I am left-clicking Save As. I am naming the copy final output 1.html and saving it beside the inputs."
ACTION | Use File > Save As, enter final output 1.html and click Save. Confirm the output tab name and both unchanged inputs.

## 3. Show two baseline errors - 3:00-5:30

SAY | "I am left-clicking Firefox in the side Dock, then File and Open File in the top menu. I am opening the unmodified final output 1.html copy to check the starting behavior."
ACTION | Open the new output copy. Subtotal is the first field below the note; Discount is below Subtotal; Tax rate is below Discount. The button is directly below Tax rate, and the table is below the button.
SAY | "For the baseline, I am left-clicking Subtotal, the top field below the note, and using Command-A to enter 100.00. I am left-clicking Discount below it and entering 10, then Tax rate below Discount and entering 10, using Command-A to replace each value. I am left-clicking Calculate estimate below Tax rate."
ACTION | Confirm those values, then click Calculate estimate.
CHECK | Baseline E01: Discount 10.00; Taxable 100.00; Tax 10.00; Total 120.00. Only read the next SAY if these actual values appear.
SAY | "The table below the button shows 10 dollars of discount, but the taxable amount is still 100 dollars and the total is 120 dollars. The correct total should be 99 dollars after discount and tax."
SAY | "For the rounding baseline, I am left-clicking Subtotal at the top and using Command-A to enter 0.03. I am setting Discount directly below it to 0 and Tax rate below Discount to 50, using Command-A to replace each value. I am left-clicking Calculate estimate."
ACTION | Set 0.03 / 0 / 50 and submit.
CHECK | Baseline E02: Taxable 0.03; Tax 0.01; Total 0.04.
SAY | "In the table's Tax row, the starter shows one cent instead of two. Fifty percent of three cents is one and a half cents, which the policy rounds up to two cents. The correct total is five cents."

## 4. Repair three formulas - 5:30-9:00

SAY | "I am left-clicking Visual Studio Code in the side Dock and selecting the final output 1.html tab. I am scrolling to line 54, directly below the discount calculation."
ACTION | Confirm the output filename. Select only the complete statement on line 54; preserve its line break and surrounding code.
SAY | "On line 54, I am changing the taxable amount to subtotal cents minus discount cents. This applies the discount before tax."
EDIT | Replace line 54 with: `const taxableCents = subtotalCents - discountCents;`
CHECK | Preserve the indentation if convenient; replace one physical line with one line. The next statements remain at 55 and 56.
SAY | "On line 55, immediately below that taxable amount, I am changing Math.floor to Math.round. Tax will round to the nearest cent instead of always rounding down."
EDIT | Replace line 55 with: `const taxCents = Math.round(taxableCents * taxRate / 100);`
SAY | "On line 56, directly below the tax formula, I am changing the total to taxable cents plus tax cents. The discount has already been subtracted, so it must not be added again."
EDIT | Replace line 56 with: `const totalCents = taxableCents + taxCents;`
SAY | "I am reviewing lines 54 through 56 in the output file, then left-clicking File and Save in Visual Studio Code's top menu. The two original inputs remain separate."
ACTION | Check the three exact statements and save. Do not change field validation, HTML, CSS or other code.

## 5. Prepare the tests - 9:00-10:00

SAY | "I am opening input 2.md in Visual Studio Code on the left and placing Firefox on the right, using ordinary windows. I will keep the test brief readable while checking the saved page."
ACTION | Arrange readable ordinary windows without full-screen Split View. Keep menu bar and side Dock visible. If switching one window at a time, follow the same test order.
SAY | "In Firefox, I am left-clicking the reload button beside the address bar to load the saved output. I will replace the form values for each test, so restored field values do not affect the checks."
ACTION | Reload the exact output file. For each field below, left-click it and use Command-A before typing its new value. Read a result SAY only after the CHECK matches.

## 6. E01 - ordinary discount and tax - 10:00-11:15

SAY | "For E01, I am left-clicking Subtotal, the top field below the note, and using Command-A to enter 100.00. I am left-clicking Discount below Subtotal and entering 10, then left-clicking Tax rate below Discount and entering 10, using Command-A to replace each value. I am left-clicking Calculate estimate below Tax rate."
ACTION | Set 100.00 / 10 / 10. Click the button and inspect all four result rows.
CHECK | Discount 10.00; Taxable 90.00; Tax 9.00; Total 99.00.
SAY | "The table now shows a 10-dollar discount, a taxable amount of 90 dollars, nine dollars of tax and a total of 99 dollars. This corrects the original 120-dollar result."

## 7. E02 - half-cent rounding - 11:15-12:30

SAY | "For E02, I am left-clicking Subtotal at the top and using Command-A to enter 0.03. I am left-clicking Discount below Subtotal and entering 0, then left-clicking Tax rate below Discount and entering 50, using Command-A to replace each value. I am left-clicking Calculate estimate."
ACTION | Set 0.03 / 0 / 50 and submit.
CHECK | Discount 0.00; Taxable 0.03; Tax 0.02; Total 0.05.
SAY | "The Tax row now shows two cents, and the total below it is five cents. The half-cent case is rounding up instead of being cut down."

## 8. E03 - round discount before tax - 12:30-13:45

SAY | "For E03, I am left-clicking Subtotal at the top and using Command-A to enter 19.99. I am left-clicking Discount below Subtotal and entering 10, then left-clicking Tax rate below Discount and entering 5, using Command-A to replace each value. I am left-clicking Calculate estimate."
ACTION | Set 19.99 / 10 / 5 and submit.
CHECK | Discount 2.00; Taxable 17.99; Tax 0.90; Total 18.89.
SAY | "The discount rounds to two dollars first. The taxable amount is 17 dollars and 99 cents, tax rounds to 90 cents, and the total is 18 dollars and 89 cents. The table follows the required calculation order."

## 9. E04 - full discount - 13:45-15:00

SAY | "For E04, I am left-clicking Subtotal at the top and using Command-A to enter 12.34. I am left-clicking Discount below Subtotal and entering 100, then left-clicking Tax rate below Discount and entering 10, using Command-A to replace each value. I am left-clicking Calculate estimate."
ACTION | Set 12.34 / 100 / 10 and submit.
CHECK | Discount 12.34; Taxable 0.00; Tax 0.00; Total 0.00.
SAY | "The discount equals the full subtotal. The Taxable amount, Tax and Estimated total rows all show zero. No tax is charged on an amount that has been completely discounted."

## 10. E05 - zero percentage rates - 15:00-16:00

SAY | "For E05, I am left-clicking Subtotal at the top and using Command-A to enter 12.34. I am left-clicking Discount and Tax rate in turn, below Subtotal, and using Command-A to enter 0 in each field. I am left-clicking Calculate estimate."
ACTION | Set 12.34 / 0 / 0 and submit.
CHECK | Discount 0.00; Taxable 12.34; Tax 0.00; Total 12.34.
SAY | "The Discount amount and Tax rows are zero. The taxable amount and total are both 12 dollars and 34 cents. Zero percentage rates are valid and leave the original amount unchanged."

## 11. E06 - native form validation - 16:00-18:30

SAY | "For E06, I am left-clicking Subtotal at the top and pressing Command-A followed by Backspace to leave it empty. Discount and Tax rate remain zero. I am left-clicking Calculate estimate below the fields."
ACTION | Clear Subtotal and submit. Point to the browser prompt beside that field.
CHECK | Native required-field validation blocks a new calculation at Subtotal. The old result table stays at E05 values.
SAY | "The browser is asking for the missing Subtotal. The old table still shows the last successful estimate; it is not a new calculation for the empty field."
SAY | "I am left-clicking Subtotal at the top and using Command-A to restore 12.34. I am left-clicking Discount directly below it and using Command-A to enter 101. Tax rate stays zero. I am left-clicking Calculate estimate."
ACTION | Restore Subtotal; set Discount 101; submit and point to the Discount validation prompt.
CHECK | Discount is range-invalid because it exceeds 100. No new calculation runs.
SAY | "The browser blocks the Discount field because 101 is above the allowed maximum of 100. The previous result has not been recalculated."
SAY | "I am left-clicking Discount, the middle field, and using Command-A to restore 0. I am left-clicking Tax rate directly below Discount and using Command-A to enter negative one. I am left-clicking Calculate estimate."
ACTION | Set Discount 0 and Tax rate -1; submit and point to the Tax rate prompt.
CHECK | Tax rate is range-invalid because it is below zero. No new calculation runs.
SAY | "The browser blocks Tax rate because negative one is below the allowed minimum of zero. The existing native validation is still working."
SAY | "I am left-clicking Tax rate, the bottom field, and using Command-A to restore 0. I am then left-clicking Calculate estimate directly below it. I will leave the demo showing a valid estimate."
ACTION | Restore Tax rate 0 and submit.
CHECK | E05 is restored: 0.00 / 12.34 / 0.00 / 12.34.

## 12. Final saved-file review - 18:30-19:15

SAY | "I am returning to Visual Studio Code and left-clicking final output 1.html in the editor's top tab bar. I am checking lines 54 through 56 and confirming the output is saved."
ACTION | Inspect the three repaired lines and absence of an unsaved dot. Point to the two unchanged inputs in Explorer.
SAY | "The taxable amount subtracts the rounded discount, tax uses Math.round, and the total adds tax to the discounted amount. The original inputs remain unchanged, and the saved final HTML is the file I will deliver."

## 13. Closing reflection - 19:15-22:30

CHECK | Read the following paragraphs only if the checks above actually passed. Rehearse at a clear natural pace; target 3-4 minutes and never exceed four. The words are fixed spoken text. Do not claim an invented mistake or read a success statement after a failed check.
SAY | "I completed a standalone invoice-estimate calculator and saved it as final output 1.html. I preserved the original starter and the requirements brief, then made the repair in a separate file. The page remains a synthetic local estimate. It does not issue an invoice, create a payment or save a record."
SAY | "I started by reading the currency policy and comparing it with the existing calculation. The main decision was the order of operations. The discount has to be rounded first and removed from the subtotal before tax is calculated. The final total is then the discounted taxable amount plus the rounded tax. Adding the discount back would undo that reduction."
SAY | "I kept the calculation in integer cents. That makes the units explicit while calculating and allows the display to use two decimal places at the end. I changed the tax rounding from always rounding down to rounding to the nearest cent. The three-cent example was useful because half of three cents is one and a half cents. The expected tax is two cents, not one."
SAY | "In Firefox, I checked all six acceptance groups from the brief. The ordinary case produced a total of 99 dollars. The small rounding case produced five cents. The 19-dollar-and-99-cent case checked discount rounding before tax, and produced 18 dollars and 89 cents. I also checked a full discount and zero percentage rates. Those boundary cases helped confirm that the formulas behave consistently."
SAY | "The final group checked the existing browser validation. An empty subtotal, a discount above 100 and a negative tax rate were blocked before a new calculation ran. I distinguished those validation prompts from the old values still visible in the result table. The page labels those values as the last successful calculation, so an old result must not be described as a new valid estimate."
SAY | "The arithmetic and visible checks support this small example, but they do not make it a production billing system. A real system would need an agreed tax policy, server validation and wider tests. The main lesson is to make the calculation order and rounding policy explicit, then verify ordinary amounts and boundary cases. I checked the saved formulas against that policy and kept the exact tested file for delivery."

## 14. Stop - about 22:30-22:45

SAY | "I am left-clicking TaskRecorder in the side Dock, then Stop Recording. I will wait for archiving to finish before closing the recorder."
ACTION | Stop the continuous recording. Wait until Idle and preserve the original archive unchanged.

## Optional error branch - read only when its CHECK applies

CHECK | If a result does not match, do not read its success SAY. Use the next SAY, inspect the three formulas and use the relevant confirmed repair below. If the issue is outside these three formulas and cannot be explained from these branches, stop the attempt and investigate before a new recording.
SAY | "The result table in Firefox does not match the test brief. I am returning to Visual Studio Code to compare lines 54 through 56 with the required formulas."
IF WRONG | Only if line 54 is actually incorrect, use the next SAY and replace it with its exact EDIT statement above.
SAY | "In Visual Studio Code, line 54 does not follow the discounted-amount rule. I am replacing it with subtotal cents minus discount cents, then I will save and repeat the failed test in Firefox."
IF WRONG | Only if line 55 is actually incorrect, use the next SAY and its exact EDIT statement above.
SAY | "In Visual Studio Code, line 55 does not follow the nearest-cent tax rule. I am replacing it with Math.round applied to taxable cents times the tax rate divided by 100, then I will save and repeat the failed test in Firefox."
IF WRONG | Only if line 56 is actually incorrect, use the next SAY and its exact EDIT statement above.
SAY | "In Visual Studio Code, line 56 does not follow the total rule. I am replacing it with taxable cents plus tax cents, then I will save and repeat the failed test in Firefox."
IF WRONG | If the cause is not one of these confirmed formula mismatches, use the next SAY and stop; never invent a cause or claim that the failed result passed.
SAY | "I have an unexpected problem that I cannot explain with these calculation checks. I am stopping this attempt to investigate before recording again."

## After recording - off screen

ACTION | Inspect the matching video at the beginning, middle and end for clear audio and picture. Check the capture archive and screenshots. Keep the original archive and video untouched. Provide the exact saved final HTML and actual app order for Metadata.rtf. Deliverables.zip will contain the unchanged two inputs and the recorded output, with metadata separate. Run both AutoQCs and the workflow checklist in the same approved Studio task. Do not edit the recording or replace its output with an off-camera repair.
