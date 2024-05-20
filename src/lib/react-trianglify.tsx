import { useRef, useEffect, memo } from 'react'
import trianglify, { type Options } from 'trianglify'

export type TrianglifyProps = Options & Partial<{
  output: "canvas" | "svg"
}>

export const Trianglify = memo(({
  output = 'canvas',
  width = 600,
  height = 400,
  ...props
}: TrianglifyProps) => {
  const refCanvas = useRef<HTMLCanvasElement | null>(null)
  const refSVG = useRef<SVGSVGElement | null>(null)
  useEffect(() => {
    const pattern = trianglify({
      width,
      height,
      ...props
    })

    if (output === "canvas" && refCanvas.current) {
      pattern.toCanvas(refCanvas.current)
    }

    if (output === "svg" && refSVG.current) {
      pattern.toSVG(refSVG.current)
    }
  }, [props, width, height, output])

  if (output === "svg") {
    return <svg ref={refSVG} width={width} height={height} />
  }

  return <canvas ref={refCanvas} width={width} height={height} />
})

export default Trianglify
