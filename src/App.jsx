import InputNote from './components/InputNote'
import NotesList from './components/NotesList'
import Logo from './components/Logo'

import { useNotes } from './hooks/useNotes'

function App() {
  const { notes } = useNotes()

  return (
    <>
      <Logo />
      <div className='py-28'>
        <InputNote />
        <NotesList notes={notes} />
      </div>
    </>
  )
}

export default App
