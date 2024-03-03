# Alphonse Editor

An open-source Notion-style WYSIWYG editor build with shadcn/ui and tailwind.

## Check the project

[Alphonse Editor](https://alphonse-delta.vercel.app/)

## Instalation

```sh
npm install alphonse
```

## Usage

```jsx
"use client";

import React from "react";
import {
  AlphonseProvider,
  AlphonseEditorProvider,
  AlphonseEditor,
} from "alphonse";

const content = `
<h1>Hello World! 🌎️</h1>
<p>The best notion like editor</p>
`;

export const Editor = () => {
  return (
    <>
      <AlphonseProvider>
        <AlphonseEditorProvider content={content}>
          <AlphonseEditor />
        </AlphonseEditorProvider>
      </AlphonseProvider>
    </>
  );
};
```

## Tech Stack

Alphonse is built on the following stack:

- [Tiptap](https://tiptap.dev/) - headless Editor
- [Tailwindcss](https://tailwindcss.com/) - styles
- [shadcn/ui](https://ui.shadcn.com/) - components library
- [typescript](https://www.typescriptlang.org/play?#) - types

## What's inside?

This repo includes the following packages/apps:

### Apps and Packages

- `web`: a [Next.js](https://nextjs.org/) app as an example of usage
- `alphonse`: The editor itselft will be delivery as a npm package in the future
- `@alphonse/ui`: [shadcn/ui](https://ui.shadcn.com/) components and custom components for alphonse editor

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Build

To build all apps and packages, run the following command:

```
cd alphonse
pnpm install
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd alphonse
pnpm install
pnpm dev
```
