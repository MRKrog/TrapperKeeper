export const errorReducer = (state = "", action) => {
  switch (action.type) {
    case 'HAS_ERROR':
    console.log('in error reducer');
      return action.message
    default:
      return state
  }
}
