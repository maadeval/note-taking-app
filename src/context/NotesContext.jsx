import { createContext, useState } from "react";

export const NotesContext = createContext({ message: 'not allowed in this scope' });

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([])

  return <NotesContext.Provider value={{ notes, setNotes }}>
    {children}
  </NotesContext.Provider>
}

export default NotesProvider