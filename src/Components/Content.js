import React from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import TextArea from './TextArea';
import Main from './Main';
import HashTagMain from './HashTagMain';
import HashTag from './HashTag';
import Filter from './Filter'
import history from './history'



export default({color, data, handleSubmission, handleLove}) => {

  return (
    <section className="container">
      <div className="left-sidebar">
        <Filter color={color} hashData={data} />
        {/* <HashTag color={color} hashData={data} /> */}
         {/* <Route exact path={`/result/:id`} render={(props) => <HashTagMain {...props} color={color} data={data.filter(oneData=>oneData.body.includes('#'))} handleLove={handleLove} />} /> */}
         

      </div>
      <Route exact path="/" render={() => <Main color={color} data={data} handleLove={handleLove} />} />
      <Route exact path={`/hashtag/:id`} render={(props) => <HashTagMain {...props} color={color} data={data.filter(oneData=>oneData.body.includes('#'))} handleLove={handleLove} />} />
      {/* <Route exact path={`/result/1`} render={(props) => <HashTagMain {...props} color={color} data={data.filter(oneData=>oneData.body.includes('#'))} handleLove={handleLove} />} /> */}
      <div className="right-sidebar">
        <div className="bar">
        <TextArea color={color} data={data} handleSubmission={handleSubmission} />
        </div>
        <br/>
        <div className="list">
          <h3> My List </h3>
          <li>Basketball on playground at time 9:00pm 1/23/2019</li>
          <li>Soccer on gym at time 19:00pm 12/18/2019</li>
        </div>
      </div>
    </section>
  )
}

