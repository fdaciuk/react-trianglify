import React, { useCallback, useMemo, useRef, useEffect, useState } from 'react'
import trianglify from 'trianglify'

function Trianglify ({
  output = 'canvas',
  width = 600,
  height = 400,
  ...props
}) {
  const ref = useRef()
  const [, forceUpdate] = useState({})
  const svgOutput = useCallback((generateOutput) => {
    generateOutput(ref.current)
  }, [])

  const canvasOutput = useCallback((generateOutput) => {
    const canvas = generateOutput()
    const ctx = ref.current.getContext('2d')
    ctx.drawImage(canvas,0, 0, width, height)
  }, [])

  const choosenOutput = useMemo(() => ({
    canvas: {
      output: 'toCanvas',
      method: canvasOutput,
    },
    svg: {
      output: 'toSVG',
      method: svgOutput,
    },
  }), [])

  useEffect(() => {
    const pattern = trianglify({
      width,
      height,
      ...props,
    })

    const generateOutput = pattern[choosenOutput[output].output]

    if (!generateOutput) {
      throw new Error('Invalid output. Only "canvas" or "svg" are allowed.')
    }

    const outputMethod = choosenOutput[output].method(generateOutput)

    forceUpdate({})
  }, [])

  const Tag = output
  return <Tag ref={ref} width={width} height={height} />
}

export default Trianglify
