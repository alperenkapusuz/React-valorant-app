import React, { useState, useEffect } from "react";
import { fetchAgentsStats } from "../api/Api";
import { Container, Grid } from "@material-ui/core";
import "./Agents.css";

const Agents = ({ agent }) => {
  const [agentData, setAgentData] = useState([]);

  useEffect(() => {
    const fetchAgentpropertyData = async () => {
      const data = await fetchAgentsStats(agent);
      setAgentData(data);
    };
    fetchAgentpropertyData();
  }, [agent]);

  return (
    <div>
      <Container className="container">
      <Grid className="name-description">
          <h1>{agentData.map((item) => item.name)}</h1>
          <h2>{agentData.map((item) => item.role)}</h2>
          <p>{agentData.map((item) => item.description)}</p>
        </Grid>
        <Grid className="ability">
          <Grid>
          <h4> {agentData.map((item) => item.ability1)}</h4>
            <img
              src={agentData.map((item) => item.ability1Icon)}
              alt="ability1Icon"
            />
          </Grid>
          <Grid>
          <h4> {agentData.map((item) => item.ability2)}</h4>
            <img
              src={agentData.map((item) => item.ability2Icon)}
              alt="ability2Icon"
            />
          </Grid>
          <Grid>
           <h4> {agentData.map((item) => item.ability3)}</h4>
            <img
              src={agentData.map((item) => item.ability3Icon)}
              alt="ability3Icon"
            />
          </Grid>
          <Grid>
          <h4>  {agentData.map((item) => item.ability4)}</h4>
            <img
              src={agentData.map((item) => item.ability4Icon)}
              alt="ability4Icon"
            />
          </Grid>
        </Grid>

        <Grid className="fullportrait">
          <img
            src={agentData.map((item) => item.fullPortrait)}
            alt="fullPortrait"
          />
        </Grid>
       
      </Container>
    </div>
  );
};

export default Agents;
