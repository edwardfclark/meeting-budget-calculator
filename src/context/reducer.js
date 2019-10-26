export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PARTICIPANT":
      return {
        ...state,
        participants: [...state.participants, action.participant]
      };
    default:
      return state;
  }
};
