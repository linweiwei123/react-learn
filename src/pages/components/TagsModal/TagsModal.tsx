import * as React from 'react';
import styles from './tagsModal.scss';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { StoreState } from '../../../common/types';
import { IAgent } from '../../../actions/home';
import * as constants from '../../../common/contants';
import * as service from '../../../services/home';
import { mergeArray } from '../../../common/utils/commonUtils';

const cx = classNames.bind(styles);

export interface IPosition {
  x: number,
  y: number
}

export interface ITagsModalProps {
  currentAgent: IAgent
  isShow: false,
  position: IPosition,
  onChangeAgent: (payload: Promise<IAgent>) => void;
}

class TagsModal extends React.Component<ITagsModalProps, any>{
  private modalRef: React.RefObject<HTMLDivElement>;
  private inputRef: React.RefObject<HTMLInputElement>;

  constructor(props: ITagsModalProps){
    super(props);
    this.state = {
      currentAgent: props.currentAgent,
      isShow: props.isShow,
      position: props.position
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount(){
    this.modalRef = React.createRef();
    this.inputRef = React.createRef();
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillReceiveProps(nextProps: ITagsModalProps){
    this.setState({
      currentAgent: nextProps.currentAgent,
      isShow: nextProps.isShow,
      position: nextProps.position
    });
    if(!nextProps.isShow){
      this.closeModal();
    }
  }

  componentWillUnmount(){
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick(e: MouseEvent){
    // @ts-ignore
    if(!this.modalRef.current.contains(e.target)){
      this.closeModal();
    }
  }

  addResource(){
    // @ts-ignore
    const value = this.inputRef.current.value || '';
    const resources = value.split(',');

    // merge new to old
    const newResources = mergeArray(this.state.currentAgent.resources, resources);
    const newAgent = {...this.state.currentAgent, resources: newResources};

    // save to server
    this.props.onChangeAgent(service.changeAgent(newAgent.id, newAgent));
    this.closeModal();
  };

  closeModal(){
    this.setState({
      isShow: false
    })
    // @ts-ignore
    this.inputRef.current.value = '';
  }

  render(){
    const modalClassName = cx({
      [styles.container]: true,
      [styles.show]: this.state.isShow
    });

    // set position -5000 to make the modal outside of the window
    let {x = -5000, y = -5000} = this.state.position;

    // fix position
    // x = click Button offsetLeft - angle position + 5 (button horizontal distance)
    x = x - 25 + 5;
    // y = click button offsetTop + 30(modal 2 button) + angle height
    y = y + 30 + 20;

    return (
      <div
        ref={this.modalRef}
        className={modalClassName}
        style={{left: x, top: y}}>
        <div className={styles.label}>
          Separate multiple resource name with commas
        </div>
        <div className={styles.inputText}>
          <input ref={this.inputRef} type="text"/>
        </div>
        <div className={styles.options}>
          <div className={`${styles.confirmButton} ${styles.button}`} onClick={()=>this.addResource()}>Add Resources</div>
          <div className={`${styles.cancelButton} ${styles.button}`}  onClick={()=>this.closeModal()}>Cancel</div>
        </div>
        <div className={styles.close} onClick={()=>this.closeModal()}>
          <span className="icon-close"/>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state: StoreState) => ({
  currentAgent: state.currentAgent
});

const mapDispatchToProps = (dispatch: any) => ({
  onChangeAgent: (payload: Promise<IAgent>) => dispatch({
    type: constants.EFTCH_CHANGED_AGENT,
    payload
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(TagsModal)