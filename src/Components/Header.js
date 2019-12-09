import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom';

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
          <li><Link style={{color}} to="/main">Home Pages</Link></li>
          <li><img style={{backgroundColor: color}} alt="logo" src={sq} /></li>
          <li> <ColorPicker color={color} handleColorChange={handleColorChange} />
          </li>
        </ul>
      </div>
      <div className="searchBar">
      <Autocomplete
        suggestions={[
          "cs311",
          "Basketball",
          "Party",
          "free",
          "food"
        ]}>
        </Autocomplete></div>
  
    </header>
    );
  }
}

export default Header;

