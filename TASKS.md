# Migration Tasks

## Phase 1: Library foundation

- [x] Create JSR package with `index.ts` and `index.scss` entrypoints
- [x] Add tree-shakable subpath exports for component-level imports
- [x] Add custom element registration helpers and `defineAllLvComponents()`

## Phase 2: Generic UI primitives

- [x] Implement `lv-app`, `lv-nav`, `lv-button`, `lv-input`
- [x] Implement `lv-surface`, `lv-grid`, `lv-card`, `lv-badge`
- [x] Implement `lv-table`, `lv-toolbar`, `lv-stat-card`
- [x] Implement `lv-modal`, `lv-tabs`, `lv-pagination`
- [x] Implement `lv-empty-state`, `lv-skeleton`, `lv-spinner`

## Phase 3: Frontend-only parity demo

- [x] Build static test app (`index.html`, compiled `index.css`, compiled
      `bundle.js`)
- [x] Use Extinguish (`enhance`, `resource`, router) to drive UI state/rendering
- [x] Include Home, Search, Requests, Admin parity-focused views

## Phase 4: Remaining component surface (next)

- [ ] Add `lv-dropdown`, `lv-popover`, `lv-tooltip`, `lv-drawer`
- [ ] Add `lv-field`, `lv-select`, `lv-textarea`, `lv-switch`, `lv-checkbox`
- [ ] Add `lv-data-grid` with sorting/pagination primitives
- [ ] Add `lv-toast-region` and confirm/alert dialog wrappers
- [ ] Add snapshot-style visual regression checks for parity confidence
