import React from "react";
import MeetingContext from "../../context/context";
import { Typography } from "@material-ui/core";

const Participants = () => {
  const { participants } = React.useContext(MeetingContext);
  console.log(participants);
  return <Typography variant="body1">Ayyy lmao</Typography>;
};

export default Participants;
