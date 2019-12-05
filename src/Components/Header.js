import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom';

import ColorPicker from './ColorPicker';
import sq from '../fq.png';

class Header extends PureComponent {
  render() {
    const {color, handleColorChange} = this.props;
    return (
      <header>
      <div className="navbar">
        <ul>
          <li><Link style={{color}} to="/">Home Pages</Link></li>
          <li><img style={{backgroundColor: color}} alt="logo" src={sq} />
          </li>
          <li> <ColorPicker color={color} handleColorChange={handleColorChange} />
          <br/>
          <input style={{color}} width='300' type='searchbar'/>
          </li>
        </ul>
      </div>
    </header>
    );
  }
}

export default Header;

