declare module "react-trianglify" {
  import trianglify from "trianglify"
  export type TrianglifyProps = trianglify.Options & Partial<{
    output: "canvas" | "svg"
  }>

  export function Trianglify(props: TrianglifyProps): JSX.Element
  export default Trianglify
}
