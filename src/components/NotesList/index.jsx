import NoteTarget from '../NoteTarget'
import NotNotes from '../NotNotes'

const NotesList = ({ notes }) => {
  if (notes.length === 0) return <NotNotes />

  return <>
    <h1 className='mt-4 mb-12 text-4xl font-semibold text-center'>Lista de tus notas</h1>
    <section className='flex flex-wrap items-center justify-center max-w-screen-lg gap-8 pb-20 mx-auto'>
      {
        notes.map(({ message, color }, index) => <NoteTarget
          key={index}
          message={message}
          color={color}
          index={index}
        />)
      }
    </section>
  </>
}

export default NotesList
