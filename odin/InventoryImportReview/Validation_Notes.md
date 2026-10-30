# Draft design validation

A local reference implementation and Node assertions were run outside the repository and outside any recording-input folder. They exercised the proposed parser, business rules and click-handler state changes with DOM stubs.

Passed: the twelve acceptance groups; additional blank-input, nonnumeric/non-finite quantity, physical-line-number and mixed structural/business-error cases; and reproduction of both intended starter defects (duplicate acceptance and stale preview after rejection).

The reference normalizes IDs before duplicate comparison, validates raw quantity strings before accepting their parsed numeric values, clears rows/errors on every review and renders values through textContent. It sends no requests and uses no storage.

Limits: this is design validation, not validation of the yet-to-be-authored Gemini inputs. No real Firefox session, native keyboard focus behavior, macOS UI, recording, Studio approval or AutoQC was exercised. Literal text assignment was checked through DOM stubs; visual literal rendering still needs the recorded Firefox check. The actual approved input files must be inspected and retested before the guide becomes recording-ready.
