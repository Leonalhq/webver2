import React from 'react';
import { Route,Link} from 'react-router-dom';

import TextArea from './TextArea';
import Main from './Main';
import HashTagMain from './HashTagMain';
import HashTag from './HashTag';

export default({color, data, handleSubmission, handleLove}) => {
    return (
      <section className="post">
        <div className="left-sidebar">
          <TextArea color={color} data={data} handleSubmission={handleSubmission} />
        </div>
      </section>
    )
  }

// export default({color, data, handleSubmission, handleLove}) => {

    
  