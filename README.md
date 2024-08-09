# @jokes/jokes-ui

## Package info

### Package installation

Installation using NPM

```bash
npm install @jokes/jokes-ui
```

### Entry points & exports

- (Default entry point)
  - JokesUi (Class)
- jokes-ui.js
  - jokes-ui (Custom Element)


## JokesUi (Class) jokes-ui (Custom Element) 

### Extends from

LitElement (lit-element package)

### Usage

Import and extend the class:

```js
import { JokesUi } from '@jokes/jokes-ui';

class ExampleElement extends JokesUi {
  ...
}
```

Use the custom element (defined globally):

```js
import '@jokes/jokes-ui/jokes-ui.js';
```

```html
<jokes-ui ...>
  ...
</jokes-ui>
```

### Description

![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
  <jokes-ui></jokes-ui>
```

### Properties

- **name** (attribute: name): string = "Cells"
    Description for property
