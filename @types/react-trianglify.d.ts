declare module "react-trianglify" {
  import trianglify from "trianglify"
  export type TrianglifyProps = Parameters<typeof trianglify>[number] & Partial<{
    output: "canvas" | "svg"
  }>

  export function Trianglify(props: TrianglifyProps): JSX.Element
  export default Trianglify
}
