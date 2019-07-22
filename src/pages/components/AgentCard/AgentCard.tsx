import * as React from 'react';
import styles from './agentCard.scss';
import { IAgent } from '../../../actions/home';
import { connect } from 'react-redux';
import { StoreState } from '../../../common/types';
import * as constants from '../../../common/contants/index';
import { changeAgent } from '../../../services/home';

const browsersIcon = {
  'windows': require('../../../assets/images/windows.png'),
  'debian': require('../../../assets/images/debin.png'),
  'centos': require('../../../assets/images/cent_os.png'),
  'suse': require('../../../assets/images/suse.png'),
  'ubuntu': require('../../../assets/images/ubuntu.png'),
};

const AgentCard = ( { agent, onChangeAgent, onAdd }: any) => {

  const {name, os, ip, location, resources = [], status} = agent;

  const deleteResource = (resourceToDel: string) => {
    agent.resources = agent.resources.filter((browser:string) =>  browser !== resourceToDel);
    onChangeAgent(changeAgent(agent.id, agent))
  };

  const onClickPlus = (e: any) => {
    let target: any = e.target;
    target = target.className === 'icon-plus'? target.parentNode : target;
    onAdd(
      agent,
        {
        x: target.offsetLeft,
        y: target.offsetTop
      },
      true
    )
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div >
          <img src={browsersIcon[os]} alt={os}/>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <div className={styles.infoItem}>
            <span className="icon-desktop"/>
            <span className={styles.name}>{name}</span>
          </div>
          <div className={`${styles.infoItem} ${styles.statusWrapper}`}>
            <span className={styles.status}>{status}</span>
          </div>
          <div className={styles.infoItem}>
            <span className="icon-info"/>
            <span>{ip}</span>
          </div>
          <div className={styles.infoItem}>
            <span className="icon-folder"/>
            <span>{location}</span>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.plusButton} onClick={(e) => onClickPlus(e)}>
            <span className="icon-plus"/>
          </div>
          <div className={styles.browsers}>
            {
              resources.map((item: string, index: number) =>  {
                return (
                  <div key={index} className={styles.browser} onClick={() => deleteResource(item)}>
                    <span>{item}</span>
                    <span className="icon-trash"/>
                  </div>
                )
              })
            }
          </div>
          <div className={styles.denyButton}>
            <span className="icon-deny"/>
            <span>Deny</span>
          </div>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = (storState: StoreState) => ({

});

const mapDispatchToProps = (dispatch: any) => ({
  onChangeAgent: (payload: Promise<IAgent>) => dispatch({
    type: constants.EFTCH_CHANGED_AGENT,
    payload
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(AgentCard)