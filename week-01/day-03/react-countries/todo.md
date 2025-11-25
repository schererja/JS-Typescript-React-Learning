# ✅ Day 3 — Countries App v3: Async Data, Error UI & Loading UI + Custom Hooks

This will teach you:

Core React Skills
Skill Why It Matters
Custom hooks (useCountries hook) Real apps always extract data logic into hooks
Loading UI Users shouldn't stare at a blank screen
Error UI Handle API failures like a pro
Retry logic Every real app needs this
Clean page/component architecture You’ll start seeing how seniors structure apps
📘 Day 3 Requirements

1. Create a custom hook: useCountries.ts

    This hook will handle:

      fetching

      error state

      loading state

      retry function

      caching (optional advanced🙂)

    It will replace the messy useEffect logic inside your page.

2. Add Loading UI

    A simple spinner or “Loading…” component.

3. Add Error UI

    Show an error message and a Retry button.
4. Update Countries.tsx to use your new hook
5. Optional nice-to-have

Choose any:

Skeleton loader (fancy loading UI)

Persist selected region in URL query params

Persist search term in URL

Add “Sort by default” option

Add dark/light mode (easy toggle)
