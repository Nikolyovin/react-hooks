import React, { FC, useRef } from 'react'
import useHover from '../hooks/useHover'

const Hover: FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  //хук который прослушивает наведение на объект
  const isHovering = useHover(ref)

  return (
    <div
      ref={ref}
      style={{
        width: 300,
        height: 300,
        background: isHovering ? 'red' : 'green',
      }}
    >
      Hover
    </div>
  )
}

export default Hover
