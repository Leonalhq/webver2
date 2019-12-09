import React from 'react';
import { Route,Link} from 'react-router-dom';

import TextArea from './TextArea';
import Header from './Header'



export default({color, data, handleSubmission, handleLove}) => {
    return (
        
        <div className="bar">
         <Header color={color} handleColorChange= '#ffffff'/>
          <TextArea color={color} data={data} handleSubmission={handleSubmission} />
        </div>
      
    )
  }

// export default({color, data, handleSubmission, handleLove}) => {

    
  