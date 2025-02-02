"use client"
import { useRef } from 'react'

export const useCarouselDrag = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)

  const scrollLeft = () => {
    const container = scrollContainerRef.current
    if (container) {
      container.scrollBy({ left: -399, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    const container = scrollContainerRef.current
    if (container) {
      container.scrollBy({ left: 399, behavior: 'smooth' })
    }
  }

  return { scrollContainerRef, scrollLeft, scrollRight }
}