import axios from "axios";

const mainLink = "http://localhost:3000"

export const fetchAgents = async () => {
    const { data } = await axios.get(`${mainLink}/agentsname`)
    return data
}

export  const fetchAgentsStats = async (agent) => {
    const {data} = await axios.get(`${mainLink}/${agent}`)
    return data
}