const initialState = {
    users: [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
      { id: 3, name: "Alice Johnson" },
      { id: 4, name: "Chris Evans" }
    ],
    filter: ''
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_FILTER':
        return { ...state, filter: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;
  