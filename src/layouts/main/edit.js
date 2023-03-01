export default function EditButton(props, { handleEdit }) {
  return (
    <button type="button" onClick={handleEdit} id="edit-btn">
      <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M8.65.293a1 1 0 011.414 0l4.643 4.643a1 1 0 010 1.414l-2.785 2.785-.001.001L6.057 15H1a1 1 0 01-1-1V8.943l5.864-5.864L8.65.292zM6.571 5.2L2 9.77V13h3.229L9.8 8.429l-3.229-3.23zm4.643 1.814L7.986 3.786l1.371-1.372 3.229 3.229-1.372 1.371zM9.5 14a1 1 0 011-1H14a1 1 0 110 2h-3.5a1 1 0 01-1-1z" fill="#BCBCBE" />
      </svg>
    </button>
  )
}
