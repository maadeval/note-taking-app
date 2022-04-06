const TickIcon = ({ w = 20 }) => {
  return <div className="text-green-800">
    <svg width={`${w}`} height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.75 8.75L6.25 12.25L13.25 4.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
}

export default TickIcon