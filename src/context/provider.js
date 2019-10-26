import React from "react";
import { reducer } from "./reducer";

// CONTEXT
import { Provider } from "./context";

const MeetingProvider = ({ children }) => {
  const [{ participants }, dispatch] = React.useReducer(reducer, {
    participants: []
  });
  return <Provider value={{ participants }}>{children}</Provider>;
};
export default MeetingProvider;
