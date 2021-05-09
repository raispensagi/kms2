import { combineReducers } from "redux";

const initialStateRegister = {
  form: {
    fullName: '',
    email: '',
    password: '',
  },
};

const RegisterReducer = (state = initialStateRegister, action) => {
  if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue,
      },
    };
  }
  return state;
};

const HistoryHome = {
  data: [],
};

const HistoryHomeReducer = (state = HistoryHome, action) => {
  if (action.type == 'SET_HISTORYHOME') {
    return {
      ...state,
      data: action.dataInput,
    };
  }

  return state;
};

// const reducer = (state = initialState, action) => {
//   return state;
// };

const reducer = combineReducers({
  RegisterReducer,
  HistoryHomeReducer
})

export default reducer;
