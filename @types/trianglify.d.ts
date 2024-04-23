declare module "trianglify" {
  declare function trianglify(opts?: trianglify.Options): trianglify.PatternInterface

  declare namespace trianglify {
    import { mix, type Color, type Scale } from "chroma-js"
    type ColorFunctionInput = {
      xPercent: number
      yPercent: number
      xScale: Scale<Color>
      yScale: Scale<Color>
      opts: Array<number[]>
      random?: () => number | undefined
    }

    type ColorFunction = (args: ColorFunctionInput) => ReturnType<typeof mix>
    type Points = Array<[number, number]>

    interface Options {
      /** Width of pattern */
      width?: number
      /** Height of pattern */
      height?: number
      /** Size of the cells used to generate a randomized grid */
      cellSize?: number
      /** how much to randomize the grid */
      variance?: number | undefined
      /** Seed for the RNG */
      seed?: number | string | null | undefined
      /** X color stops */
      xColors?: string[]
      /** Y color stops */
      yColors?: string[]
      /** Color space used for gradient construction & interpolation */
      colorSpace?: "rgb" | "hsl" | "hsv" | "hsi" | "lab" | "oklab" | "lch" | "oklch" | "hcl" | "lrgb" | undefined
      /** Color function f(x, y) that returns a color specification that is consumable by chroma-js */
      colorFunction?: ColorFunction
      /** Width of stroke. Defaults to 1.51 to fix an issue with canvas antialiasing. */
      strokeWidth?: number | undefined
      /** An array of [x,y] coordinates to triangulate. Defaults to `undefined`, and points are generated. */
      points?: Points | undefined
      /** A boolean value to tell if trianglify should render the triangles or not. Defaults to `true` */
      fill?: boolean | undefined
      /** The array of color combinations to pick from when using random for the `xColors` or `yColors`. */
      palette?: Record<string, string[]> | Color
    }

    type RequiredOptions = Required<Options>

    interface SVGOptions {
      includeNamespace?: boolean | null | undefined
      coordinateDecimals?: number | null | undefined
    }

    interface CanvasOptions {
      scaling?: 'auto' | false | null | undefined
      applyCssScaling?: boolean | null | undefined
    }

    type Polys = Array<{
      vertexIndices: number[]
      centroid: {
        x: number
        y: number
      }
      color: Color
    }>

    interface PatternInterface {
      points: Points
      polys: Polys
      opts: RequiredOptions
      toSVG(element?: SVGElement, opts?: SVGOptions): SVGElement
      toCanvas(canvas?: HTMLCanvasElement, opts?: CanvasOptions): HTMLCanvasElement
    }

    class Pattern extends PatternInterface {
      constructor(points: Points, polys: Polys, opts: RequiredOptions)
    }

    export const defaultOptions: RequiredOptions

    export const colorFunctions: {
      interpolateLinear(n: number): ColorFunction
      sparkle(n: number): ColorFunction
      shadows(n: number): ColorFunction
    }

    export const utils: {
      mix: typeof mix
      colorbrewer: Record<string, string[]>
    }
  }

  export as namespace trianglify
  export = trianglify
}
