//synchronous
export const loading = () => {
  return {
    type: "LOADING"
  }
}

//action creators... async
export const ageUpAsync = (val) => {
  return { type: "AGE_UP", value: val };
};

export const ageUp = (val) => {
  return dispatch => {
    //sync
    dispatch(loading());
    //async
    setTimeout(() => {
      val++;
      dispatch(ageUpAsync(val));
    }, 5000)
  }
}

//sync
export const ageDown = (val) => {
  return { type: "AGE_DOWN", value: val };
};