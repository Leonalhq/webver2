import React, {PureComponent} from 'react';
import { Link,withRouter } from 'react-router-dom';

import ColorPicker from './ColorPicker';
import sq from '../fq.png';
import Autocomplete from './Searchbar';
class Header extends PureComponent {
  render() {
    const {color, handleColorChange} = this.props;
    return (
      <header>
      <div className="navbar">
        <ul>
          <li><button onClick={()=> this.props.history.replace({pathname:'/'})}/></li>
          <li><img style={{backgroundColor: color}} alt="logo" src={sq} /></li>
          <li className="searchBar">
        <Autocomplete
        suggestions={[
          "cs311",
          "Basketball",
          "Party",
          "free",
          "food"
        ]}>
        </Autocomplete></li>
        </ul>
      </div>
     
  
    </header>
    );
  }
}

export default withRouter(Header);

