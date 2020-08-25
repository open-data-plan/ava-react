# AVA React

> React component wrapper for [`AVA`](https://github.com/antvis/AVA)

[![build](https://github.com/open-data-plan/ava-react/workflows/build/badge.svg)](https://github.com/open-data-plan/ava-react/actions?query=workflow%3Abuild)
[![npm](https://img.shields.io/npm/v/@opd/ava.svg)](https://www.npmjs.com/package/@opd/ava)
[![npm](https://img.shields.io/npm/dm/@opd/ava.svg)](https://www.npmjs.com/package/@opd/ava)
[![npm](https://img.shields.io/npm/l/@opd/ava.svg)](https://www.npmjs.com/package/@opd/ava)
[![codecov](https://codecov.io/gh/open-data-plan/ava-react/branch/master/graph/badge.svg)](https://codecov.io/gh/open-data-plan/ava-react)

## Install

```bash
npm install @opd/ava
```

## Usage

```tsx
import React from 'react'
import AVAChart from '@opd/ava'

const data = [
  {
    x: 'A',
    y: 2,
  },
  {
    x: 'B',
    y: 4,
  },
  {
    x: 'C',
    y: 6,
  },
]

export default () => <AVAChart data={data} toolbar />
```

## Develop

```bash
npm install
npm run build
```
