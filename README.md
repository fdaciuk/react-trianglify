# React Trianglify

> React Wrapper Component for [trianglify][trianglify-url]

:us: [English][en-docs] | :brazil: [Português do Brasil][pt-br-docs]

## Installation

**Using Bun:**

```sh
bun add react-trianglify trianglify
# If you're using TypeScript, add these types as `devDependencies`:
bun add --dev @types/trianglify
```

**Using NPM:**

```sh
npm install --save react-trianglify trianglify
# If you're using TypeScript, add these types as `devDependencies`:
npm install --save-dev @types/trianglify
```

**Using Yarn:**

```sh
yarn add react-trianglify trianglify
# If you're using TypeScript, add these types as `devDependencies`:
yarn add --dev @types/trianglify
```

## Dependencies

You must have `react` and `trianglify` already installed on your project.

PS.: If you have any problems with latest trianglify version, try to install the tested version `v4.1.1`.

## Usage

```js
import Trianglify from 'react-trianglify'

ReactDOM.render(<Trianglify />, $mountNode)
```

## Props

By taking `output`, you can use any [trianglify][trianglify-url-options] allowed options.

Possible `output` values:

- `canvas` (default)
- `svg`

## Live demo

You can access `react-trianglify` live demo [here][demo-url]

## License

[GPL-3.0][license-url] &copy; Fernando Daciuk

[trianglify-url]: https://github.com/qrohlf/trianglify
[trianglify-url-options]: https://github.com/qrohlf/trianglify#-configuration
[demo-url]: https://react-trianglify.vercel.app/
[license-url]: /LICENSE
[en-docs]: /README.md
[pt-br-docs]: /docs/pt-br.md
