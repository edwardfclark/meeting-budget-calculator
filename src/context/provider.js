import React from "react";

// CONTEXT
import { Provider } from "./context";

const MeetingProvider = ({ children }) => {
  return <Provider>{children}</Provider>;
};
export default MeetingProvider;
