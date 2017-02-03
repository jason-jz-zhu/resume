import React, { Component } from 'react';
// import styles from './HomeStory.css';
import Viz from '../../App/components/D3/Viz/Viz';

class HomeStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <div>
        VIZ
        <Viz />
      </div>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.object.isRequired,
//   dispatch: PropTypes.func.isRequired,
//   intl: PropTypes.object.isRequired,
// };

export default HomeStory;
