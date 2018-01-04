let initialState = {
    name: 'qweqwe',
    colors: [],
    nameIsValid: false,
    isFormValid: false
}

export default function form(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    default:
      return state
  }
}