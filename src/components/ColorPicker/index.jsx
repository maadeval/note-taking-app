import { useState } from 'react'
import PickerIcon from '../UI/PickerIcon'

const ColorPicker = ({ listColors, colorSelected, setColorSelected, isTop = true }) => {
  const [showMenu, setShowMenu] = useState(false)

  const handleColor = (index) => {
    setColorSelected(listColors[index])
    setShowMenu(false)
  }

  return <div className="relative z-40 flex items-center">
    <button
      className={`w-6 h-6 flex items-center justify-center rounded-md hover:ring-4 ${colorSelected.principal} transition`}
      type="button"
      onClick={() => setShowMenu((lastValue) => !lastValue)}
    ><PickerIcon color={colorSelected.text} w={14} /></button>
    {
      showMenu && <div className={`absolute z-20 flex flex-col gap-2 p-2 my-6 mr-0 translate-x-1/2 rounded-md shadow-2xl right-1/2 bg-white/90 backdrop-blur shadow-slate-300 ${isTop ? 'bottom-full' : 'top-full'}`}>{
        listColors.map(({ principal }, index) =>
          <button
            onClick={() => handleColor(index)}
            type="button"
            key={principal}
            className={`w-8 h-8 rounded-md ${principal} hover:brightness-95`}
          ></button>)
      }</div>
    }
  </div>
}

export default ColorPicker
