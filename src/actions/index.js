// actions
export const fetchNotes = (allNotes) => ({
  type: 'FETCH_NOTES',
  allNotes
})

export const hasError = (message) => ({
  type: 'HAS_ERROR',
  message
})

export const isLoading = (value) => ({
  type: 'IS_LOADING',
  value
}) 
