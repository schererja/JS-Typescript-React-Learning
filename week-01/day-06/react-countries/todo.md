# Day 06 To-Dos

Loading Skeletons

- [X] Create SkeletonTable component
- [X] Replace existing Loading component with skeleton
- [X] Add placeholder rows that match table layout
- [X] Ensure no layout shift when loading

Error Handling UI

- [X] Wrap getCountries() in try/catch
- [X] Add error state
- [X] Create ErrorState component with retry button
- [X] Show ErrorState on failure

Offline Mode

- [ ] Add useOffline hook using window online/offline events
- [ ] Create OfflineBanner component
- [ ] Show banner when offline

Improved Highlighting

- [ ] Support multi-word search
- [ ] Highlight matches in name and region
- [ ] Escape regex safely
- [ ] Preserve diacritics

Keyboard and Accessibility

- [ ] Add aria-sort attributes
- [ ] Add keyboard activation for sorting (Enter/Space)
- [ ] Add focus styles for headers

Responsive Layout

- [ ] Enable horizontal scroll on small screens
- [ ] Stack pagination vertically on small screens
- [ ] Stack search and filter vertically below 600px
- [ ] Reduce padding in rows on mobile

UI Polish

- [ ] Add row hover states
- [ ] Add alternating row backgrounds
- [ ] Add fade animation when filters change
- [ ] Improve pagination button styles
- [ ] Improve region filter visibility

Component Organization

- [ ] Move table components into components/table/
- [ ] Move shared pieces into components/ui/
- [ ] Move hooks into hooks/
- [ ] Keep CountryTable clean and minimal
