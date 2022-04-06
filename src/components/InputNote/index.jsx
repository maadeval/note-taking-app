import { useState } from 'react'
import ColorPicker from '../ColorPicker'
import PlusIcon from '../UI/PlusIcon'

import { useNotes } from '../../hooks/useNotes'
import { useColors } from '../../hooks/useColors'
import { COLOR_LIST } from '../../config/colorList'

const InputNote = () => {
  const [value, setValue] = useState('')
  const { colorSelected, setColorSelected } = useColors(COLOR_LIST[0])
  const { addNote } = useNotes()

  const handleChange = (e) => setValue(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (value.trim() === '') return

    addNote({
      message: value,
      color: colorSelected
    })
    setValue('')
  }

  return <>
    <form className="fixed bottom-0 z-40 flex items-center justify-center gap-4 px-8 py-4 mb-12 -translate-x-1/2 rounded-md shadow-2xl shadow-slate-200 bg-white/80 left-1/2" onSubmit={handleSubmit}>
      <input
        className="px-2 py-1 text-lg transition rounded-md outline-none focus:ring-4 focus:ring-sky-200"
        value={value}
        onChange={handleChange}
        placeholder='Agregar nota...'
      />
      <ColorPicker
        listColors={COLOR_LIST}
        colorSelected={colorSelected}
        setColorSelected={setColorSelected}
      />
      <button className="w-full p-2 text-2xl text-white transition rounded-full bg-sky-600 hover:brightness-105 hover:ring-4 hover:ring-sky-200">
        <PlusIcon w={22} h={22} />
      </button>
    </form>
  </>
}

export default InputNote
