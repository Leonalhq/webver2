import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';

export default class TextArea extends Component {
  state = {
    name: 'Neil',
    text: '',
    allowed: 0,
    location:'',
    time:'',
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color !== nextProps.color) {
      return true;
    }
    if (this.state !== nextState) {
      return true;
    }
    return false;
  }

  handleChange = (text) => {
    let allowed = text.length;
    this.setState({text, allowed});
  }

  handleLocalSubmission = (e) => {
    e.preventDefault();
    const { name, text,time,location } = this.state;
    (text.trim().length > 0 && text.trim().length <= 240 ) ? this.props.handleSubmission(uuidv1(), name, text.trim(),time,location) & this.setState({text: '', allowed: 0}) : null;
  }

  render() {
    const { color } = this.props;
    const { name, allowed, text,time,location } = this.state;

    return (
      <form>
        <div className="profile">
          <img alt="profile-img" style={{borderColor: color}} src="https://placeimg.com/40/40/people" />
          <input className="profile-name" placeholder="Enter your name here" value={name} onChange={({target: {value}}) => this.setState({name: value})} />
        </div>
        <textarea style={{borderColor: color}} rows="5" className="text-input" placeholder="Write Something" value={text} onChange={({target: {value}}) => this.handleChange(value)} />
        <ul>
          
          <li> <input className="location" placeholder="Location" value={location} onChange={({target: {value}}) => this.setState({location: value})} /></li>
          <li> <input className="time" placeholder="DD/MM/YY" value={time} onChange={({target: {value}}) => this.setState({time: value})} /></li>
          <li>{allowed <= 240 ? <span className="normal">{`${(240 - allowed)} word${(240 - allowed) === 1 ? '':'s'} left`}</span> : <span className="error">{`${(allowed - 240)} word${(allowed - 240) === 1 ? '':'s'} exceeded`}</span>}</li>
          <br/>
          <li><button style={{backgroundColor: color}} type="submit" onClick={(e) => this.handleLocalSubmission(e)}>Post</button></li>
        </ul>
      </form>
    )
  }
}
