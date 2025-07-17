# Quick Design

A lightweight, flexible design system for React applications built with Tailwind CSS.

## Features

- 🎨 Minimal & Flexible - Provides essential layout components without being opinionated
- ⚡ Framework Agnostic - Works with Next.js, Vite, Create React App, and any React setup
- 🎯 TypeScript First - Full type safety with excellent IntelliSense support
- 🚀 Zero Runtime - All styles compiled at build time via Tailwind CSS
- 📱 Responsive - Mobile-first responsive design out of the box

## Installation

```
npm install quick-design
```

## Requirements

- React 16.8.0 or higher
- Tailwind CSS 3.0.0 or higher

## Quick Start

```
import { Section, Container } from "quick-design";

export default function Page() {
  return (
    <main>
      <Section>
        <Container>
          <h1>Welcome to Quick Design</h1>
          <p>Build layouts quickly with minimal, flexible components.</p>
        </Container>
      </Section>
    </main>
  );
}
```

## Components

### Section

A semantic wrapper for content sections with minimal vertical spacing.

```
<Section>
  <h2>Section Title</h2>
  <p>Section content...</p>
</Section>
```

**Default spacing**: py-2 (8px) on mobile, sm:py-4 (16px) on 640px+ screens.

### Container

Centers content with a maximum width and responsive padding.

```
<Container>
  <p>This content will be centered with appropriate padding.</p>
</Container>
```

**Features:**

- `mx-auto` - Horizontally centered
- `max-w-7xl` - Maximum width of 1280px
- `p-4 sm:p-6` - Responsive padding


## Customization

All components accept a `className` prop for custom styling:

```
<Section className="py-12 bg-gray-50">
  <Container className="max-w-4xl">
    <h1>Custom styled section</h1>
  </Container>
</Section>
```

## Utilities

The library also exports utility functions:

```
import { cn } from "quick-design/utils";

// Merge classNames with conflict resolution
const classes = cn("px-4", "py-2", isActive && "bg-blue-500");
```

## TypeScript

All components include full TypeScript support:

```
import type { ComponentProps } from "react";

// All components accept standard React props
<Section className="custom-class" id="hero" style={{ margin: 0 }}>
  Content
</Section>
```

## License

MIT