import ArrowHome from "../UI/ArrowHome"

const NotNotes = () => {
  return <div className="fixed flex flex-col items-center justify-center gap-8 -translate-x-1/2 left-1/2 top-1/2">
    <p className="text-2xl bottom-60 text-slate-600">Agrega una nota para poder verla</p>
    <ArrowHome w={120} />
  </div>
}

export default NotNotes