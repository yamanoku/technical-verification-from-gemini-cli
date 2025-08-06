# Font Awesome v7 in Next.js Verification

This document summarizes the verification of using Font Awesome v7 in a Next.js application.

**Note:** This verification was performed without access to the official Font Awesome v7 documentation. The information regarding deprecated props is based on assumptions and common patterns in library evolution.

## Required Props

The only required prop for the `FontAwesomeIcon` component remains `icon`.

```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

<FontAwesomeIcon icon={faUser} />
```

## Other Commonly Used Props

The following props continue to work as expected for styling:

- `size`: Modifies the icon size (e.g., `"2x"`, `"lg"`).
- `color`: Sets the icon color.

## Potentially Deprecated Props (Assumed)

Based on common trends to move styling concerns from props to CSS, the following props are assumed to be deprecated in v7.

### `spin` and `pulse`

The `spin` and `pulse` boolean props may be removed. Animations should be handled via CSS classes. You can define your own keyframe animations or use utility classes if your CSS framework provides them.

**Example (using CSS-in-JS):**

```jsx
<style jsx>{`
  @keyframes fa-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .fa-spin-custom {
    animation: fa-spin 2s infinite linear;
  }
`}</style>
<FontAwesomeIcon icon={faSpinner} className="fa-spin-custom" />
```

### `border`

The `border` prop is likely removed. You can add a border using CSS.

```jsx
<FontAwesomeIcon icon={faUser} style={{ border: '1px solid black', padding: '5px' }} />
```

## Next.js Integration

To use Font Awesome in Next.js (App Router), you need to prevent Next.js from trying to render the icons on the server without CSS.

Add the following configuration to your layout or page component:

```javascript
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
```

This ensures that the styles are loaded correctly.

## Summary of v6 to v7 Migration (Assumed)

- **Required:** The `icon` prop is still required.
- **Styling:** Props like `size` and `color` are still available.
- **Deprecated:** `spin`, `pulse`, and `border` props are likely removed. Use CSS for these effects.
- **Next.js:** Remember to include the `config.autoAddCss = false;` line to ensure proper styling.
