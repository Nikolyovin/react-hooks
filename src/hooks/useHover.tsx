import React, { useState, useEffect } from 'react'

//хук который прослушивает наведение на объекты
export default function useHover(ref: React.RefObject<HTMLDivElement>) {
  const [isHovering, setHovering] = useState<boolean>(false)

  const on: () => void = () => setHovering(true)
  const off: () => void = () => setHovering(false)

  useEffect(() => {
    if (!ref.current) {
      return
    }
    const node = ref.current

    node.addEventListener('mouseenter', on) // когда навели на нужный объект
    node.addEventListener('mousemove', on) //когда внутри этого объекта
    node.addEventListener('mouseleave', off) //когда вышли из объекта

    // после удаляем слушатели событий
    return function () {
      node.removeEventListener('mouseenter', on) // когда навели на нужный объект
      node.removeEventListener('mousemove', on) //когда внутри этого объекта
      node.removeEventListener('mouseleave', off) //когда вышли из объекта
    }
  }, [])

  return isHovering
}
