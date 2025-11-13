# Design System Audit - Issues Found

## 1. Missing Colors

### Missing from CSS Variables:
- `--color-interactive-accent`: `lch(47.918 59.303 288.421)` - Bright purple/blue for primary actions (interactive-2)
- `--color-text-button`: `lch(90.421 1 272)` - Specific button text color (slightly different from text-secondary)

## 2. Button Component Issues

### Current Implementation Problems:
- **Padding**: Using uniform `0px 8px` but spec shows `0px 8px 0px 6px` for default buttons with icons
- **Missing Primary Variant**: No bright accent color button (should use `lch(47.918 59.303 288.421)`)
- **Font Size**: Medium buttons use `13.3333px` which matches spec for button text ✓
- **Small buttons**: Using `12px` which matches spec ✓

### Spec Requirements:
From `components.buttons`:
1. `outline-small-large` (pill):
   - `padding: "0px 2px"` ✓
   - `border-radius: 50%` ✓
   - `font-size: 12px` ✓
   - `color: "lch(90.421 1 272)"` ✗ (using generic text-secondary)

2. `outline-small-small`:
   - `padding: "0px 8px"` ✓
   - `border-radius: 5px` ✓
   - `font-size: 12px` ✓
   - `color: "lch(90.65 1.35 272)"` ✓

3. `default-small-large`:
   - `background: "lch(12.3 3.7 272)"` ✓
   - `color: "lch(90.65 1.35 272)"` ✓
   - `padding: "0px 8px 0px 6px"` ✗ (using uniform 0px 8px)
   - `border-radius: 5px` ✓
   - `font-size: 12px` ✓

## 3. Navigation Component Issues

### Current Implementation Problems:
- **Padding**: Using `6px 8px` but spec shows `0px` for default variant
- **Icon sizing**: 16px ✓ (correct)
- **Font size**: 16px ✓
- **Font weight**: 400 ✓
- **Color**: Using text-primary ✓

### Spec Requirements:
From `components.navigation`:
- Variant 1: `padding: 0px` (6 items)
- Variant 2: `padding: 0px 0px 0px 13px` (3 items)
- Variant 3: `padding: 0px 8px` (1 item, badge variant)

## 4. Typography Issues

### Body Text:
- Base: `font-size: 14px`, `font-weight: 450` ✓ (correct for desktop)
- Should be `13px` on mobile ✓ (have media query)

### Link Text (from spec):
- `size: 16px`, `weight: 400`, `line-height: 24px` ✓ (matches navigation)

### Caption/Meta Text (from spec):
- `size: 12px`, `weight: 500`, `line-height: normal` ✓ (used for badges/counts)

### Button Text (from spec):
- `size: 13.3333px`, `weight: 400`, `line-height: 24px` (need to verify)

## 5. Icon Issues

### Current Implementation:
- Size: 16x16 ✓
- Color: Inherits from parent (currentColor) ✓

## 6. Sidebar Issues

### Current Implementation:
- Width: 229px ✓ (matches spec)
- Background: Using bg-primary ✓
- Border: Using border-primary ✓

## Summary of Required Fixes:

1. ✅ Add missing color variables (interactive-accent, text-button-alt)
2. ✅ Fix button padding to use asymmetric padding for icon buttons
3. ✅ Add primary/accent button variant with bright color
4. ✅ Fix navigation padding from `6px 8px` to `0px` with proper variants
5. ✅ Verify all font-sizes and weights match spec exactly
6. ✅ Ensure button text uses correct line-height (24px)
