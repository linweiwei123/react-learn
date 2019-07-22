import styles from './home.scss';
import * as React from 'react';
import { getAllAgents } from '../../../services/home';
import AgentCard from '../AgentCard/AgentCard';
import { IAgent, ICount } from '../../../actions/home';
import CountBlock from '../CountBlock/CountBlock';
import QueryBlock from '../QueryBlock/QueryBlock';
import TagsModal, { IPosition } from '../TagsModal/TagsModal';

class Home extends React.Component<any, any> {

  constructor(props: any){
    super(props);
    this.state = {
      agents: this.props.agents,
      agentsShow: this.props.agents,
      query: {
        type: 'all',
        search: ''
      },
      tagModal: {
        isShow: false,
        position: {}
      }
    }
  }

  componentWillReceiveProps(nextProps: any){
    const {type, search} = this.state.query;
    this.setState({
      agents: nextProps.agents,
      agentsShow: filterChain(nextProps.agents)(type)(search)
    })
  }

  componentWillMount(){
    this.props.onLoad(getAllAgents())
  }

  onChangeTag(type: string){
    const agents = this.state.agents;
    this.setState({
      agentsShow: filterByType(agents, type),
      query: {
        type
      }
    });
  }

  onSearchName(search: string){
    const agents = this.state.agents;
    this.setState({
      agentsShow: filterBySearch(agents, search),
      query: {
        search
      }
    });
  }

  onChangeTagsModal(agent: IAgent, position: IPosition, isShowTagsModal?: boolean){
    this.props.changeLocalAgent(agent);
    this.setState({
      tagModal: {
        position,
        isShow: isShowTagsModal || this.state.tagModal.isShow
      }
    })
  }

  render(){
    const { agentsShow = [] } = this.state;
    const countData: ICount = countBlockData(agentsShow);

    return (
      <div className={styles.container}>
        <CountBlock {...countData}/>
        <QueryBlock
          onChangeType={(type: string)=>this.onChangeTag(type)}
          onSearchName={(type: string)=>this.onSearchName(type)}
        />
        {
          agentsShow.map( (item: IAgent, index: number) => {
            return <AgentCard
              key={index}
              agent={item}
              onAdd={
                (agent: IAgent, position: IPosition, isShowTagsModal?: boolean) =>
                  this.onChangeTagsModal(agent, position, isShowTagsModal)
              }
            />
          })
        }
        <TagsModal
          isShow={this.state.tagModal.isShow}
          position={this.state.tagModal.position}
          // onConfirm={arr => this.changeAgent()}
        />
      </div>
    )
  }

}

function countBlockData(agents: IAgent[]) : ICount{
  let building: number = 0;
  let idle: number = 0;
  const total: number = agents.length;
  let physical: number = 0;
  let virtual: number = 0;

  agents.forEach((agent: IAgent) => {
    if(agent.status === 'building'){
      building = building + 1;
    }
    else if(agent.status === 'idle'){
      idle = idle + 1;
    }
    if(agent.type === 'physical'){
      physical = physical + 1;
    }
    else if(agent.type === 'virtual'){
      virtual = virtual + 1;
    }
  });

  return {
    building,
    idle,
    total,
    physical,
    virtual
  }
}

/**
 * 连续过滤的方法
 * @param agents
 */
const filterChain =  (agents: IAgent[]) => (type: string) => (search: string) => {
  return filterBySearch(filterByType(agents, type), search)
};

/**
 * 根据类型过滤
 * @param agents
 * @param type
 */
function filterByType(agents: IAgent[], type: string){
  const typeLowerCase = type.toLowerCase();
  const filtered = typeLowerCase === 'all' ? agents:
    agents.filter((agent: IAgent) => agent.type.toLowerCase() === typeLowerCase)
  return filtered
}

/**
 * 根据关键字过滤
 * @param agents
 * @param search
 */
function filterBySearch(agents: IAgent[], search: string){
  if(search === ''){
    return agents;
  }
  return agents.filter((agent: IAgent) => agent.name.indexOf(search) > -1);
}

export default Home;