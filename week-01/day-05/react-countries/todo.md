✅ Day 4 – Advanced React: Memoization, Derived State, and Optimizing the Table

Today we evolve your Country Browser from “works” to “professional-grade.”

You’ll learn:

📌 Day 4 Core Concepts

1. Derived state vs stored state

When data can be calculated, you shouldn’t store it in state.

2. useMemo for expensive calculations

Sorting, filtering, and pagination should be memoized.

3. useCallback to stabilize function references

Avoid unnecessary rerenders.

4. Preventing re-renders in child components

React.memo() and proper props handling.

5. Clean pagination logic

No warnings, no state-reset effects, no loops.
Task 1 — Convert your sort + filter + pagination to useMemo

Instead of:

const sortedCountries = [...filteredCountries].sort(...)

You will do:

const sortedCountries = useMemo(() => {
   // sorting logic
}, [filteredCountries, sortConfig]);

And same for:

DONE:filteredCountries

DONE: pagedCountries

Memoization ensures these only recompute when inputs change, not every render.

📘 Task 2 — Remove setState inside useEffect

Pagination reset should now happen here:

const onSelectRegion = useCallback((region: string) => {
   setSelectedRegion(region);
   setCurrentPage(1);
}, []);

Same for sorting.

📘 Task 3 — Wrap CountryRow with React.memo

Because country data never changes:

export default React.memo(CountryRow);

This avoids rerendering every row when unrelated state changes.

📘 Task 4 — Make your pagination component its own file

Right now it's tightly coupled. Instead do:

< Pagination
    currentPage={currentPage}
    totalPages={totalPages}
    onPageChange={setCurrentPage}
/>

Cleaner. Easier to test.

📘 Task 5 — Fix the table structure

Right now you have:

<CountryRow>
  <tbody>
  </tbody>
</CountryRow>

This is invalid HTML.

Correct pattern:

<table>
   <TableHeader />
   <tbody>
      {pagedCountries.map(row)}
   </tbody>
</table>

You’ve half-fixed this already — we’ll finalize it.
