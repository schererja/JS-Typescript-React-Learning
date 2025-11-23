# Requirements

[X] Fetch countries from the same API (<https://restcountries.com/v3.1/all>)

[X] Display a table with:

1. [X]  Flag

2. [X]  Name

3. [X]  Region
4. [X]  Population

[X] Sortable Columns: Clicking on column headers sorts ascending/descending.

[X] Filter by Region: Dropdown to select a region (Africa, Asia, etc.)

[X] Search bar: Filters by name (like Day 1, keep debounce 300ms).
[ ] TypeScript improvements:

1. [X] Define SortDirection enum (asc | desc)

2. [ ] Define TableColumn type for headers

3. [ ] Strongly type all event handlers (onChange, onClick)

Modular components:

1. [X] CountryTable → renders table

2. [X] TableHeader → renders sortable header

3. [X] CountryRow → renders one row

4. [X] FilterDropdown → renders region select

Optional Nice-to-Haves:

1. [ ] Skeleton loading states

2. [ ] “No countries found” message

3. [ ] Use useMemo for filtered/sorted data
