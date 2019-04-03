// actions
export const fetchNotes = (allNotes) => ({
  type: 'FETCH_NOTES',
  allNotes
})

export const saveNote = (note) => ({
  type: 'SAVE_NOTE',
  note,
})
