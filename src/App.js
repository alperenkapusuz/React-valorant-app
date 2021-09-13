import React, { useState, useEffect } from "react";
import { fetchAgents } from "./components/api/Api";
import {
  FormControl,
  Select,
  MenuItem,
  makeStyles,
  Container,
  Grid
} from "@material-ui/core";
import Agents from "./components/agents/Agents";
import "./App.css";


const useStyles = makeStyles(() => ({
  formControl: {
    margin: "50px auto",
    width: "50%",
  },
}));

const App = () => {
  const [agents, setAgents] = useState([]);
  const [agent, setAgent] = useState("Breach");

  useEffect(() => {
    const fetchAgentsData = async () => {
      const agents = await fetchAgents();
      setAgents(agents);
    };
    fetchAgentsData();
  }, []);
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Grid container>
          <FormControl className={classes.formControl}>
            <Select
              value={agent}
              onChange={(event) => setAgent(event.target.value)}
              color="white"
            >
              {agents.map((agent) => (
                <MenuItem value={agent.slug}>{agent.displayName}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Grid item xs={12}>
                <Agents agent={agent}/>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default App;
