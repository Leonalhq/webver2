import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Login from './Components/Login'
import './App.css';
import history from './Components/history';
import data from './data';

class main extends Component {
  state = {
    color: '#881c1c',
    data: data
  }

  handleColorChange = (color) => {
    this.setState({color});
  }

  handleSubmission = (id, name, post,time,location) => {
    let data  = this.state.data;
    post = {
      id,
      author: name,
      body: post,
      time:time,
      location:location

    }
    data = [post, ...data];
    this.setState({data});
  }

  handleLove = (post) => {
    let data = this.state.data;
    data = data.map(singleData => singleData === post ? (post.love ? {id: post.id, author: post.author, body: post.body,location:post.location, time:post.time,love: false}:{id: post.id, author: post.author, body: post.body,location:post.location,time:post.time,love: true}) : singleData);
    this.setState({data});
  }

  render() {
    const { color, data } = this.state;
    const { handleColorChange, handleSubmission, handleLove } = this;

    return (
      
      <Router basename="/main" history={history}>
        <div className="App">  
          <Header color={color} handleColorChange={handleColorChange} />
          <Content color={color} data={data} handleSubmission={handleSubmission} handleLove={handleLove} />
          <Footer color={color} />
        </div>
      </Router>
    );
  }
}

export default main;
