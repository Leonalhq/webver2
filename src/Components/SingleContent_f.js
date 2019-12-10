import React, {Component} from 'react';

import { singleContent2 } from '../helper';

export default class singleContent_f extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.data !== nextProps.data) {
      return true;
    }
    if (this.props.color !== nextProps.color) {
      return true;
    }
    return false;
  }
  render() {
    const {data, color, handleLove} = this.props;
    const { author, love,location,time} = data;
    return (
      <div className="single-content">
        <img alt="profile-pic" src="https://placeimg.com/40/40/people" />
        <h3>{author}</h3>
        <p>{singleContent2(data, color)}</p>
        <h5>location:{location}</h5>
        <h5>time:{time}</h5>
        <ul>
          <li><button style={{backgroundColor: love ? '#e91e63' : color}} className="btn-love" onClick={() => handleLove(data)} >{love ? 'Attended' : 'Wan Attend'}</button></li>
        </ul>
      </div>
    )
  }
}
