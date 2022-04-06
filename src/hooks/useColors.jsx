import { useState } from "react"

export const useColors = (color) => {
  const [colorSelected, setColorSelected] = useState(color)

  return {
    colorSelected,
    setColorSelected
  }
}