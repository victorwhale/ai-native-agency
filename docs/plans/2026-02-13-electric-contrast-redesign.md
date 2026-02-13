# Electric Contrast Visual Redesign — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Make the site more punchy and less dark by alternating light/dark sections with multi-color accents to improve retention and session time.

**Architecture:** Add light-mode CSS variables to globals.css, then update each component/page to alternate between dark and light sections. Each vertical gets its own accent color (cyan, orange, emerald). Blog articles and alternatives pages switch to light background with dark text.

**Tech Stack:** Next.js, Tailwind CSS v4, CSS custom properties

---

### Task 1: Add new CSS variables to globals.css

**Files:**
- Modify: `src/app/globals.css`

**Step 1: Add light-mode and multi-color variables**

Add these variables inside the `@theme inline` block:

```css
  --color-light-bg: #f8fafc;
  --color-light-text: #1e293b;
  --color-light-muted: #64748b;
  --color-light-border: #e2e8f0;
  --color-light-surface: #ffffff;
  --color-cyan: #06b6d4;
  --color-orange: #f97316;
  --color-emerald: #10b981;
```

**Step 2: Verify dev server starts**

Run: `npm run dev` (or whatever start command) — verify no CSS errors in console.

**Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: add light-mode and multi-color CSS variables"
```

---

### Task 2: Redesign Homepage — Hero section

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Update Hero gradient and CTA**

Replace the hero gradient from single-color indigo to multi-color:
```tsx
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-accent)_0%,_transparent_50%)] opacity-15" />
```
becomes:
```tsx
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--color-accent)_0%,_transparent_40%),radial-gradient(ellipse_at_top_right,_var(--color-cyan)_0%,_transparent_40%)] opacity-20" />
```

Update primary CTA button from flat `bg-accent` to gradient:
```tsx
className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent to-accent-light text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
```

**Step 2: Verify in browser**

Check hero has a multi-color gradient glow (indigo left, cyan right) and the CTA button has a gradient.

---

### Task 3: Redesign Homepage — "What Is" section (switch to light)

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Convert "What Is" section to light background**

Replace:
```tsx
<section className="mx-auto max-w-6xl px-6 py-20">
```
with:
```tsx
<section className="bg-light-bg">
  <div className="mx-auto max-w-6xl px-6 py-20">
```

Update text classes inside this section:
- `text-muted` → `text-light-muted`
- `text-foreground` (on `<strong>` tags) → `text-light-text`
- The `<h2>` needs `text-light-text`
- The "Read the full definition" link: `text-accent hover:text-accent-light` (accent colors work on both backgrounds)

Close the wrapping `<div>` before the section close.

**Step 2: Verify in browser**

Section should now have a light slate background with dark text.

---

### Task 4: Redesign Homepage — "3 Verticals" section (light + colored cards)

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Add color per vertical in data**

Update the `verticals` array to include a color per item:
```tsx
const verticals = [
  {
    name: "Sales",
    description: "...",
    examples: "...",
    color: "cyan",
  },
  {
    name: "Marketing",
    description: "...",
    examples: "...",
    color: "orange",
  },
  {
    name: "Back-Office",
    description: "...",
    examples: "...",
    color: "emerald",
  },
];
```

**Step 2: Switch section to light background with colored cards**

Replace:
```tsx
<section className="mx-auto max-w-6xl px-6 py-20">
```
with:
```tsx
<section className="bg-light-bg">
  <div className="mx-auto max-w-6xl px-6 py-20">
```

Update heading and text to light-mode colors.

Update card rendering to use colored top borders:
```tsx
{verticals.map((v) => (
  <div
    key={v.name}
    className={`p-6 rounded-xl border border-light-border bg-light-surface shadow-sm hover:shadow-md transition-shadow border-t-4 ${
      v.color === "cyan" ? "border-t-cyan" :
      v.color === "orange" ? "border-t-orange" :
      "border-t-emerald"
    }`}
  >
    <h3 className="text-xl font-bold text-light-text">{v.name}</h3>
    <p className="mt-3 text-light-muted text-sm leading-relaxed">
      {v.description}
    </p>
    <p className="mt-4 text-xs text-light-muted font-mono">{v.examples}</p>
  </div>
))}
```

Close the wrapping `<div>`.

Update link to use accent colors (they work on both backgrounds).

**Step 3: Verify in browser**

Cards should have white background, light border, and a colored top border (cyan/orange/emerald).

---

### Task 5: Redesign Homepage — "Advantages" section (colored metrics)

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Add color per advantage**

Update the `advantages` array:
```tsx
const advantages = [
  { metric: "65–80%", label: "Gross Margins", description: "...", color: "text-cyan" },
  { metric: "10x", label: "Faster Delivery", description: "...", color: "text-orange" },
  { metric: "∞", label: "Scalability", description: "...", color: "text-emerald" },
];
```

**Step 2: Use the color in rendering**

Replace:
```tsx
<p className="text-4xl font-bold text-accent-light">{a.metric}</p>
```
with:
```tsx
<p className={`text-4xl font-bold ${a.color}`}>{a.metric}</p>
```

This section stays dark (bg-surface) — only the metric numbers change color.

**Step 3: Verify in browser**

Each metric should now be a different color on the dark background.

---

### Task 6: Redesign Homepage — "Featured Articles" section (light + hover colors)

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Switch to light background**

Replace:
```tsx
<section className="mx-auto max-w-6xl px-6 py-20">
```
with:
```tsx
<section className="bg-light-bg">
  <div className="mx-auto max-w-6xl px-6 py-20">
```

Update heading and text to light-mode colors.

Update article cards:
```tsx
className="group p-6 rounded-xl border border-light-border bg-light-surface shadow-sm hover:shadow-md hover:border-accent/40 transition-all"
```

Update text inside cards:
- Title: `text-light-text group-hover:text-accent-light`
- Description: `text-light-muted`
- Link text: stays `text-accent-light`

Close wrapping `<div>`.

---

### Task 7: Redesign Homepage — Contact section (orange gradient CTA)

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Update contact gradient**

Replace single indigo gradient:
```tsx
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--color-accent)_0%,_transparent_50%)] opacity-10" />
```
with warmer multi-color:
```tsx
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-orange)_0%,_transparent_40%),radial-gradient(ellipse_at_bottom_right,_var(--color-accent)_0%,_transparent_40%)] opacity-15" />
```

This section stays dark.

**Step 2: Commit all homepage changes**

```bash
git add src/app/page.tsx
git commit -m "feat: redesign homepage with electric contrast light/dark sections and multi-color accents"
```

---

### Task 8: Update ContactForm — gradient submit button

**Files:**
- Modify: `src/components/ContactForm.tsx`

**Step 1: Update submit button**

Replace:
```tsx
className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-accent text-white rounded-lg font-medium text-lg hover:bg-accent-light transition-colors cursor-pointer"
```
with:
```tsx
className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-orange to-amber-500 text-white rounded-lg font-medium text-lg hover:opacity-90 transition-opacity cursor-pointer"
```

Note: `amber-500` is a Tailwind default color (`#f59e0b`). If it doesn't work with the CSS variable approach, use `from-[#f97316] to-[#f59e0b]` instead.

**Step 2: Commit**

```bash
git add src/components/ContactForm.tsx
git commit -m "feat: update contact form submit button to orange gradient"
```

---

### Task 9: Update ArticleLayout — light background

**Files:**
- Modify: `src/components/ArticleLayout.tsx`

**Step 1: Switch to light background**

Wrap the article in a light background container. Replace:
```tsx
<article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
```
with:
```tsx
<article className="bg-light-bg min-h-screen">
  <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
```

**Step 2: Update prose styling**

Replace `prose-invert` with light-mode prose styling. The long className string needs these changes:
- Remove `prose-invert`
- `[&>p]:text-muted` → `[&>p]:text-light-muted`
- `[&>ul]:text-muted` → `[&>ul]:text-light-muted`
- `[&>ol]:text-muted` → `[&>ol]:text-light-muted`
- `[&>blockquote]:text-muted` → `[&>blockquote]:text-light-muted`
- `[&_strong]:text-foreground` → `[&_strong]:text-light-text`
- `[&>hr]:border-border` → `[&>hr]:border-light-border`
- Headings (h1, h2, h3) need `text-light-text` added

**Step 3: Update Related Articles nav**

- `border-border` → `border-light-border`
- `text-muted` → `text-light-muted`
- Card: `border-border hover:border-accent/40 hover:bg-surface` → `border-light-border hover:border-accent/40 hover:bg-light-surface shadow-sm`

Close the wrapping `<div>` before closing `</article>`.

**Step 4: Commit**

```bash
git add src/components/ArticleLayout.tsx
git commit -m "feat: switch article layout to light background with dark text"
```

---

### Task 10: Update Alternative pages — light background

**Files:**
- Modify: `src/app/alternatives/traditional-agencies/page.tsx`
- Modify: `src/app/alternatives/ai-native-vs-ai-enabled/page.tsx`
- Modify: `src/app/alternatives/traditional-vs-ai-native/page.tsx`

These pages duplicate the prose styling inline instead of using ArticleLayout. Apply the same light-mode changes as Task 9:

**Step 1: For each alternative page:**

- Wrap the `<article>` content in `bg-light-bg min-h-screen`
- Replace `prose-invert` with light prose classes
- Replace `text-muted` → `text-light-muted` in prose selectors
- Replace `text-foreground` → `text-light-text` in strong selectors
- Replace `border-border` → `border-light-border` in hr selectors
- Add `text-light-text` to heading selectors
- Update any table styling: `[&_table]:text-muted` → `[&_table]:text-light-muted`

**Step 2: Commit**

```bash
git add src/app/alternatives/
git commit -m "feat: switch alternative pages to light background"
```

---

### Task 11: Update Contact page and Thank You page — light background

**Files:**
- Modify: `src/app/contact/page.tsx`
- Modify: `src/app/contact/thank-you/page.tsx`

**Step 1: Contact page**

Wrap in light background:
```tsx
<section className="bg-light-bg min-h-screen">
  <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
```

Update text:
- `text-muted` → `text-light-muted`
- Heading gets `text-light-text`

Update ContactForm input styles to work on light background:
- Input background: `bg-surface` → `bg-light-surface`
- Input border: `border-border` → `border-light-border`
- Input text: `text-foreground` → `text-light-text`
- Placeholder: `placeholder:text-muted/50` → `placeholder:text-light-muted/50`

This means updating the `inputStyles` const in `ContactForm.tsx` and the label colors.

**Step 2: Thank You page**

Same light background wrapper. Update:
- `text-muted` → `text-light-muted`
- Heading: `text-light-text`
- CTA buttons: gradient primary, light-mode secondary border

**Step 3: Update ContactForm for light backgrounds**

Since ContactForm is used in both the homepage (dark context) and contact page (light context), we need to handle this. The simplest approach: the contact page ContactForm uses light styling. Add a `variant` prop:

```tsx
type ContactFormProps = {
  variant?: "dark" | "light";
};
```

With `variant="light"` switching `inputStyles` to light-mode colors. Default is `"dark"` for backward compatibility.

**Step 4: Commit**

```bash
git add src/app/contact/ src/components/ContactForm.tsx
git commit -m "feat: switch contact pages to light background with form variant support"
```

---

### Task 12: Final visual QA and cleanup

**Step 1: Run dev server and check every page**

Pages to verify:
- `/` — alternating light/dark sections, colored cards, gradient CTAs
- `/blog/what-is-ai-native-agency` — light background, dark text, readable
- `/blog/yc-ai-native-agency` — same
- `/blog/ai-native-agency-verticals` — same
- `/blog/ai-native-vs-traditional` — same
- `/blog/how-to-start-ai-native-agency` — same
- `/blog/ai-native-agency-tech-stack` — same
- `/blog/ai-native-agency-pricing` — same
- `/alternatives/traditional-agencies` — light background
- `/alternatives/ai-native-vs-ai-enabled` — light background
- `/alternatives/traditional-vs-ai-native` — light background
- `/contact` — light background, form works
- `/contact/thank-you` — light background

**Step 2: Fix any visual issues**

Common issues to watch for:
- Text contrast on light backgrounds (ensure `text-light-text` and `text-light-muted` are readable)
- Card borders too subtle on white (may need slightly darker `light-border`)
- Gradient buttons readable
- Header backdrop blur works on both light and dark sections

**Step 3: Final commit**

```bash
git add -A
git commit -m "fix: visual QA cleanup for electric contrast redesign"
```
