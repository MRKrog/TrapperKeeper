export const notesReducer = (state=[], action) => {
  switch(action.type) {
    case 'FETCH_NOTES' :
      return action.allNotes.map(note => ({
        id: note.id,
        title: note.title,
        list: note.list,
        background: note.background,
      }));
    default:
      return state;
  }
}
