import React from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import TextArea from './TextArea';
import Main from './Main';
import HashTagMain from './HashTagMain';
import HashTag from './HashTag';
import Post from'./Post';
import history from './history'
// import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, NavLink  } from 'reactstrap';
// import Button from '@material-ui/core/Button';


export default({color, data, handleSubmission, handleLove}) => {

  return (
    <section className="container">
      <div className="left-sidebar">
        <HashTag color={color} hashData={data} />
      </div>
      <Route exact path="/" render={() => <Main color={color} data={data} handleLove={handleLove} />} />
      <Route exact path={`/hashtag/:id`} render={(props) => <HashTagMain {...props} color={color} data={data.filter(oneData=>oneData.body.includes('#'))} handleLove={handleLove} />} />
      <div className="right-sidebar">
        <div className="bar">
        <TextArea color={color} data={data} handleSubmission={handleSubmission} />
        </div>
      </div>
    </section>
  )
}

