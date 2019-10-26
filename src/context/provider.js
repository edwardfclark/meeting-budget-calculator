import React from "react";

// CONTEXT
import { Provider } from "./context";

const MeetingProvider = ({ children }) => {
  const test = "Test.";

  return <Provider value={{ test }}>{children}</Provider>;
};
export default MeetingProvider;
