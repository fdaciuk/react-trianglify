# React Trianglify

> Componente React Wrapper para [trianglify][trianglify-url]

:us: [English][en-docs] | :brazil: [Português do Brasil][pt-br-docs]

## Instalação

**Utilizando Bun:**

```sh
bun add react-trianglify trianglify
# E se você estiver usando TypeScript, adicione esses pacotes como `devDependencies`:
bun add --dev @types/trianglify @types/chroma-js
```

**Utilizando NPM:**

```sh
npm install --save react-trianglify trianglify
# E se você estiver usando TypeScript, adicione esses pacotes como `devDependencies`:
npm install --save-dev @types/trianglify @types/chroma-js
```

**Utilizando Yarn:**

```sh
yarn add react-trianglify trianglify
# E se você estiver usando TypeScript, adicione esses pacotes como `devDependencies`:
yarn add --dev @types/trianglify @types/chroma-js
```

## Dependências

Você precisa ter o `react` e o `trianglify` instalados em seu projeto.

Obs.: Se você tiver qualquer problema usando a versão mais recente do trianglify,
instale a versão que foi testada com esse projeto `v4.1.1`.

## Uso

```js
import Trianglify from 'react-trianglify'

ReactDOM.render(<Trianglify />, $mountNode)
```

## Propriedades (props)

Tirando `output`, você pode usar qualquer opção permitida pelo [trianglify][trianglify-url-options].

Possíveis valores para `output`:

- `canvas` (padrão)
- `svg`

## Demonstração

Você pode ver o `react-trianglify` funcionando [aqui][demo-url]

## Licença

[MIT][license-url] &copy; Fernando Daciuk

[trianglify-url]: https://github.com/qrohlf/trianglify
[trianglify-url-options]: https://github.com/qrohlf/trianglify#-configuration
[demo-url]: https://react-trianglify.vercel.app/
[license-url]: https://github.com/fdaciuk/licenses/blob/master/MIT-LICENSE.md
[en-docs]: /README.md
[pt-br-docs]: /docs/pt-br.md
