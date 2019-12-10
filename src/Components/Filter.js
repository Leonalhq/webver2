import React from 'react';
import { withRouter } from 'react-router-dom';
import { findLocation,findHash } from '../helper';
import history from './history'

export default({hashData, color}) => {
  return (
    
    <div className="hashtag-area">
      <h3>Filter</h3>
      <h4>Time</h4>
      <ul>
        <input id = 'a999' type="checkbox"/>
        within 5 days
        <br/>
        <input id = 'a999' type="checkbox"/>
        within 10 days
        <br/>
        <input id = 'a999' type="checkbox"/>
        within 15 days
        <br/>
        <input id = 'a999' type="checkbox"/>
        within 30 days
      </ul>
      <button onClick={()=><button onClick={alert("no such result!")}>filter</button>}>filter</button>
      
      <h4>Location</h4> 
      <ul>
      <input id = 'a999' type="checkbox"/>
        on campus
        <br/>
        <input id = 'a999' type="checkbox"/>
        off campus
        <br/>
        <input id = 'a999' type="checkbox"/>
        library
        <br/>
        <input id = 'a999' type="checkbox"/>
        personal property
      </ul>
      <button onClick={()=><button onClick={alert("no such result!")}>filter</button>}>filter</button>
      
      


    </div>
  )
}
