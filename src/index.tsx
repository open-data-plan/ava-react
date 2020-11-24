import React, { FC, useRef, useEffect, CSSProperties } from 'react'
import { autoChart, AutoChartOptions } from '@antv/chart-advisor'

export interface AVAProps extends AutoChartOptions {
  data: any[]
  className?: string
  style?: CSSProperties
}

const AVA: FC<AVAProps> = (props) => {
  const container = useRef<HTMLDivElement>(null)
  const { className, style, ...restProps } = props
  useEffect(() => {
    /* istanbul ignore else */
    if (container.current) {
      const { data, ...config } = restProps
      autoChart(container.current, data, config)
    }
  }, [restProps])
  return <div className={className} style={style} ref={container} />
}

export default AVA
