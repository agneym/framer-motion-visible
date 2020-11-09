# Framer Motion - Visible

Utility React hook to trigger framer motion animations when a node is visible in the viewport.

<br />
<a href="https://www.npmjs.com/package/framer-motion-visible">
  <img src="https://badge.fury.io/js/framer-motion-visible.svg" />
</a>
<img src="https://img.shields.io/badge/module%20formats-cjs%2C%20esm-green.svg" />
<br />
<a href="https://prettier.io">
  <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square" />
</a>
<a href="http://makeapullrequest.com">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" />
</a>
<br />

## Installation

```bash
npm i framer-motion-visible
```

## Usage

```javascript
function Title({ children }) {
  const visibleAnimation = useVisibleAnimation({
    initial: { x: -40, y: 40, opacity: 0 },
    visible: { x: 0, y: 0, opacity: 1 },
  });

  return <motion.h1 {...visibleAnimation}>{children}</motion.h1>;
}
```

## Development

Uses [microbundle](https://npm.im/microbundle) for development setup.

Following command for running a dev library build.

```
npm run dev
```

![Twitter Follow](https://img.shields.io/twitter/follow/agneymenon?style=flat-square)
