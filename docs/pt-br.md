# React Trianglify

> Componente React Wrapper para [trianglify][trianglify-url]

:us: [English][en-docs]&nbsp;&nbsp;|&nbsp;&nbsp;:brazil: [Português do Brasil][pt-br-docs]

## Instalação

**Utilizando NPM:**

```console
npm install --save react-trianglify trianglify
```

**Utilizando Yarn:**

```console
yarn add react-trianglify trianglify
```

## Dependências

Você precisa ter o `react` e o `trianglify` instalados em seu projeto.

Obs.:  Se você tiver qualquer problema usando a versão mais recente do trianglify,
instale a versão que foi testada com esse projeto `v4.1.1`.

## Uso

```js
import Trianglify from 'react-trianglify'

ReactDOM.render(
  <Trianglify />,
  $mountNode
)
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

