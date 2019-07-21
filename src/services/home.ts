import axios from 'axios';
import { IAgent } from '../actions/home';

export const getAllAgents = () =>
  axios.get('/agents').then( resp => {
   return resp.data
  });

export const changeAgent = (id: number, agent: IAgent) =>
  axios.put(`/agents/${id}`, agent)
    .then(resp => resp.data);