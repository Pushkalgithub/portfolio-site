'use client'

import { useEffect } from 'react'

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor') as HTMLDivElement
    const cursorOutline = document.querySelector('.cursor-outline') as HTMLDivElement

    let mouseX = 0
    let mouseY = 0
    let outlineX = 0
    let outlineY = 0

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`
    }

    const animateOutline = () => {
      outlineX += (mouseX - outlineX) * 0.15
      outlineY += (mouseY - outlineY) * 0.15

      cursorOutline.style.transform = `translate(${outlineX}px, ${outlineY}px)`
      requestAnimationFrame(animateOutline)
    }

    window.addEventListener('mousemove', moveCursor)
    animateOutline()

    // Hover interactions
    const hoverables = document.querySelectorAll(
      'a, button, .card-glass'
    )

    hoverables.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorOutline.classList.add('cursor-hover')
      })
      el.addEventListener('mouseleave', () => {
        cursorOutline.classList.remove('cursor-hover')
      })
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <>
      <div className="cursor" />
      <div className="cursor-outline" />
    </>
  )
}
