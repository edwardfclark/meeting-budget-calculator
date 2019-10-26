import React from "react";
import MeetingProvider from "./context/provider";
import { Grid, Typography } from "@material-ui/core";

function App() {
  return (
    <MeetingProvider>
      <Grid container>
        <Grid item xs={4}>
          <Typography variant="h4">Configure Meeting</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h4">Statistics</Typography>
        </Grid>
      </Grid>
    </MeetingProvider>
  );
}

export default App;
