**Objective:** Convert the existing fixed/desktop-first design into a fully responsive system without breaking visual hierarchy, geometry, or interaction patterns.

---

## 1. Define a Responsive Strategy

**Error:** Current design is desktop-dominant (sidebar fixed, 12-column grid assumed).
**Correction:** Use **mobile-first scaling** with progressive enhancement.

Breakpoints (already defined but must be enforced consistently):

* Mobile: `<768px`
* Tablet: `768px–1024px`
* Desktop: `≥1024px`

Use these principles:

* Stack vertically on mobile
* Reduce geometry complexity on small screens
* Preserve typography hierarchy
* Avoid absolute-position overflow

---

## 2. Global Layout Responsiveness

### Sidebar / Navigation

**Error:** Fixed sidebar on desktop will break on mobile.

**Correction:**

Mobile:

* Convert sidebar to top navbar
* Hide navigation links inside hamburger menu
* Remove `fixed` positioning
* Width: `w-full`
* Height: auto
* Use overlay drawer menu

Tablet:

* Still hamburger or collapsible sidebar

Desktop:

* Fixed sidebar (`w-64`, `position: fixed`)
* Main content `ml-64`

Implementation logic:

```css
mobile: sidebar = relative
desktop: sidebar = fixed
```

---

## 3. Grid System Adaptation

**Rule:** Every 12-column grid must collapse progressively.

Example:

Hero section:

* Desktop: 7 columns text / 5 columns visuals
* Tablet: 1 column text / 1 column visuals stacked
* Mobile: text first, shapes below

Use:

* `grid-cols-1 md:grid-cols-2 lg:grid-cols-12`

And map:

* text: `lg:col-span-7`
* shapes: `lg:col-span-5`

---

## 4. Typography Scaling

**Error:** Hero text (96px) will overflow on mobile.

**Correction:** Clamp font sizes.

Use Tailwind or CSS clamp:

```
Hero H1:
mobile: text-5xl (48px)
tablet: text-7xl (72px)
desktop: text-8xl (96px)
```

Apply same pattern for:

* Section headers
* Mission statements
* CTA headings

Avoid:

* fixed pixel font sizes
* line-height below 1 on mobile

---

## 5. Geometric Shapes Responsiveness

**Major Risk Area**

Absolute-positioned shapes will overflow or hide content on small screens.

### Rules:

Mobile:

* Reduce shape sizes by 40–60%
* Center shapes
* Lower z-index
* Disable blend modes if needed
* Avoid overlap with text

Tablet:

* Partial absolute positioning allowed

Desktop:

* Full composition allowed

Example:

```
Rectangle:
mobile: w-32 h-40 static
desktop: w-64 h-80 absolute top-10 right-10
```

Conditionally render shapes:

* Hide background grid lines on mobile
* Hide accent line on mobile
* Reduce blur radius

---

## 6. Hero Section Responsiveness

### Mobile Layout:

* Single column
* Text centered or left aligned
* CTA stacked vertically
* Shapes moved below text
* Reduce padding from `px-32` → `px-6`

### Tablet:

* Two-column layout
* Shapes still simplified

### Desktop:

* Full asymmetric layout

---

## 7. Cards & Grids (Expertise, Works, Services, Team)

**Error:** Large gaps (gap-24) unsuitable for mobile.

**Correction:**

Grid behavior:

* Mobile: `grid-cols-1`
* Tablet: `grid-cols-2`
* Desktop: `grid-cols-3 or 4`

Gap scaling:

* Mobile: `gap-6`
* Tablet: `gap-8`
* Desktop: `gap-16`

Card content:

* Reduce padding from `p-8` → `p-4` on mobile
* Reduce shape sizes
* Center-align text if necessary

---

## 8. Works Section (Project Offset Issue)

**Error:** Second project offset (`mt-32`) will cause large blank space on mobile.

**Correction:**

* Disable offset on mobile
* Enable only on desktop

```
mt-0 lg:mt-32
```

---

## 9. Forms (Contact Page)

**Rules:**

* Inputs must be full width always
* Grid changes from 5/7 columns → stacked

Mobile:

* Info block on top
* Form below
* Single column

Tablet:

* Two columns

Desktop:

* 5/7 split

Touch optimization:

* Increase button height
* Increase spacing between inputs
* Font size minimum 16px

---

## 10. Spacing System Adjustments

Scale padding and margins per breakpoint:

Vertical padding:

* Mobile: `py-16`
* Tablet: `py-24`
* Desktop: `py-32`

Horizontal padding:

* Mobile: `px-6`
* Tablet: `px-20`
* Desktop: `px-32`

Never keep desktop spacing on mobile.

---

## 11. Background Grid Lines

**Error:** Decorative vertical lines will clutter small screens.

**Correction:**

* Hide on mobile
* Show on desktop only

```
hidden lg:block
```

---

## 12. Animation & Hover Behavior

**Error:** Hover interactions don’t exist on touch devices.

**Correction:**

* Disable scale animations on mobile
* Keep only opacity or color change
* Avoid hover-only critical UI

Example:

```
hover:scale-105 only on lg:
```

---

## 13. Performance & Overflow Control

Add:

* `overflow-hidden` on hero and sections with shapes
* Prevent shapes from causing horizontal scroll
* Use `max-w-full` on images and SVGs

---

## 14. Testing Matrix (Mandatory)

Test on:

* 360px width (small phone)
* 768px (tablet)
* 1024px (laptop)
* 1440px (desktop)

Check:

* No horizontal scroll
* Text readable
* Buttons tappable
* Shapes not overlapping text
* Navigation usable
* Form usable

---

## 15. Implementation Checklist

* [ ] Sidebar switches to hamburger on mobile
* [ ] All grids collapse to single column
* [ ] Shapes scale or hide on mobile
* [ ] Font sizes clamp per breakpoint
* [ ] Section padding reduces on mobile
* [ ] Offset elements disabled on mobile
* [ ] Background grid hidden on mobile
* [ ] Hover effects disabled for touch
* [ ] Forms stacked vertically
* [ ] No overflow-x

---