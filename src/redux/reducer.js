const initialStateRegister={
    form: {
        fullName:'',
        email : '',
        password:''
    }
};
const RegisterReducer = (state=initialStateRegister, action) => {
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
const reducer = (state=initialState, action) => {
    return state;
};
export default RegisterReducer;