export const setForm = (inputType, value) => {
  return {type: 'SET_FORM', inputType: inputType, inputValue: value};
};

export const setHistoryHome = valueData => {
  return {type: 'SET_HISTORYHOME', dataInput: valueData};
};
