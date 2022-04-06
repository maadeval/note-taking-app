import { useContext } from 'react'
import { NotesContext } from '../context/NotesContext'

export const useNotes = () => {
  const { notes, setNotes } = useContext(NotesContext)

  const addNote = (newNote) => {
    setNotes((lastNotes) => lastNotes.concat(newNote))
  }

  const removeNote = (id) => {
    setNotes((lastNotes) => lastNotes.filter((_, index) => index !== id))
  }

  const editNote = (id, text, color) => {
    const newNotes = notes.map((note, index) => {
      if (index === id) return {
        ...note,
        message: text || note.message,
        color: color || note.color
      }

      return note
    })
    setNotes(newNotes)
  }

  return {
    notes,
    addNote,
    editNote,
    removeNote
  }
}
