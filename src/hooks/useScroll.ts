import React, { useRef, useEffect } from 'react'

//хук для бесконечной прокрутки
// parentRef принимает ссылку на блок внутри которого будет скролл
//childref блок после попадание в область видимости будет подгружать еще
// и callback
//Observer API позволяет веб-приложениям асинхронно следить за изменением пересечения элемента с его родителем или областью видимости документа

interface IUseScroll {
  parentRef: React.RefObject<HTMLDivElement>
  childref: React.RefObject<HTMLDivElement>
  callback: () => void
}

export default function useScroll(
  parentRef: React.RefObject<HTMLDivElement>,
  childref: React.RefObject<HTMLDivElement>,
  callback: () => void
) {
  let observer: any

  useEffect(() => {
    const options = {
      root: parentRef.current,
      rootMargin: '0px',
      threshold: 0,
    }
    observer = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) {
        console.log('intersected')
        callback()
      }
    }, options)
    //указываем за каким элементом надо следить
    observer.observe(childref.current)

    //когда компонент будет демонтироваться отключаем слежение за элементом
    return function () {
      observer.unobserve(childref.current)
    }
  }, [callback])
}
