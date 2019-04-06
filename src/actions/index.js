// actions
export const fetchNotes = (allNotes) => ({
  type: 'FETCH_NOTES',
  allNotes
})

export const hasError = (message) => ({
  type: 'HAS_ERROR',
  message
})
