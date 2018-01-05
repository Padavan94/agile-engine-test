import {
    GET_FORM_VALIDATE,
    GRAB_FORM_COLORS
} from "../actions/actions";

let initialState = {
    name: '',
    defaultColors: ['red', 'green', 'blue'],
    colors: [],
    isFormValid: false,
    validationState: null
}

export default function form(state = initialState, action) {
  switch (action.type) {
      case GET_FORM_VALIDATE:
        return {...state, ...action.payload}
      case GRAB_FORM_COLORS:
        return {...state, colors : action.payload }
    default:
      return state
  }
}