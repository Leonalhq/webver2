import React, {PureComponent} from 'react';

class Footer extends PureComponent {
  render() {
    const {color} = this.props;
    return (
      <footer>
      <ul>
        <li>CS325</li>
        <li>Love</li>
        <li>By <a rel="noopener noreferrer" style={{backgroundColor: color}} target="_blank" >flying squirrel</a></li>
      </ul>
    </footer>
    );
  }
}

export default Footer;

