import { useState } from "react"
import EditIcon from '../UI/EditIcon'
import RemoveIcon from '../UI/RemoveIcon'
import TickIcon from "../UI/TickIcon"

import { useNotes } from "../../hooks/useNotes"
import { useColors } from "../../hooks/useColors"
import ColorPicker from "../ColorPicker"
import { COLOR_LIST } from "../../config/colorList"

const NoteTarget = ({ message, color, index }) => {
  const [isEditable, setIsEditable] = useState(false)
  const [text, setText] = useState(message)

  const { editNote, removeNote } = useNotes()
  const { colorSelected, setColorSelected } = useColors(color)

  const handleText = (e) => {
    const newText = e.target.innerText
    setText(newText)
  }

  const handleEdit = () => {
    setIsEditable((lastValue) => !lastValue)
  }

  const handleSave = (index) => {
    if (text.trim() === "") return
    editNote(index, text, colorSelected)
    setIsEditable(false)
  }

  return <article className={`flex relative items-center p-2 rounded-md shadow-slate-200 shadow-xl bg-white/40 hover:bg-white/80 transition`} key={index}>
    <div className={`rounded-md ${color.principal} ${color.border} ${color.text}`}>
      <p contentEditable={isEditable} onInput={(e) => handleText(e)} className='max-w-xs py-2 pl-2 pr-4 text-xl'>{message}</p>
    </div>
    <div className='flex gap-2 pl-8'>
      {
        isEditable && <div className="flex items-center justify-center mr-4">
          <ColorPicker colorSelected={colorSelected} listColors={COLOR_LIST} setColorSelected={setColorSelected} isTop={false} />
        </div>
      }
      {
        isEditable ? <button
          className='flex items-center justify-center w-10 h-10 p-2 transition bg-green-100 border rounded-full hover:ring-2 hover:ring-green-200'
          onClick={() => handleSave(index)}><TickIcon /></button> : <button
            className='flex items-center justify-center w-10 h-10 p-2 transition border rounded-full bg-slate-100 hover:ring-2 hover:ring-slate-200'
            onClick={() => handleEdit(index)}><EditIcon /></button>
      }
      <button
        className='flex items-center justify-center w-10 h-10 p-2 transition border rounded-full bg-rose-100 hover:ring-2 hover:ring-rose-200'
        onClick={() => removeNote(index)}><RemoveIcon /></button>
    </div>
  </article>
}

export default NoteTarget