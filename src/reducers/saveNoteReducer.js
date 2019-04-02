export const saveNoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'SAVE_NOTE':
      return action.note
    default:
      return state
  }
}
