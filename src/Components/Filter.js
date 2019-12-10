import React from 'react';
import { withRouter } from 'react-router-dom';
import { findLocation,findHash } from '../helper';
import history from './history'

export default({hashData, color}) => {
  return (

    <div className="hashtag-area">
      <h3>Filter</h3>
      <h4>Time</h4>
      <ul id="cbx1">
        <input id = '5days' type="checkbox"/>
        <label for="5days">within 5 days</label>
        <br/>
        <input id = '10days' type="checkbox"/>
        <label for="10days">within 10 days</label>
        <br/>
        <input id = '15days' type="checkbox"/>
        <label for="15days">within 15 days</label>
        <br/>
        <input id = '30days' type="checkbox"/>
        <label for="30days">within 30 days</label>
      </ul>
      <button id="flt" onClick={()=><button onClick={alert("no such result!")}>filter</button>}>filter</button>

      <h4>Location</h4>
      <ul id="cbx2">
        <input id = 'oncp' type="checkbox"/>
        <label for="oncp">on campus</label>
        <br/>
        <input id = 'offcp' type="checkbox"/>
        <label for="offcp">off campus</label>
        <br/>
        <input id = 'lib' type="checkbox"/>
        <label for="lib">library</label>
        <br/>
        <input id = 'pp' type="checkbox"/>
        <label for="pp">personal property</label>
      </ul>
      <button id="flt" onClick={()=><button onClick={alert("no such result!")}>filter</button>}>filter</button>




    </div>
  )
}
