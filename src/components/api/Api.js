import axios from "axios";

const mainLink = "https://valorant-api.com/v1"

export const fetchAgentData = async () => {
    const { data } = await axios.get(`${mainLink}/agents`)
    return data
}

export  const fetchAgentsStats = async (agent) => {
    const {data} = await axios.get(`${mainLink}/agents/${agent}`)
    return data
}