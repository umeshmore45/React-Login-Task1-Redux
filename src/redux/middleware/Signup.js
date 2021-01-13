const signUp = (store) => (next) => (action) => {
  console.log("hello", action);

  return next(action);
};

export default signUp;
