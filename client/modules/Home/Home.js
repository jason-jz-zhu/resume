import React, { Component } from 'react';
import HomeStory from './HomeStory/HomeStory';
import styles from './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <div className={styles.supremeContainer}>
        <h1 className={styles.header}>Viz your resume</h1>
        <HomeStory />
      </div>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.object.isRequired,
//   dispatch: PropTypes.func.isRequired,
//   intl: PropTypes.object.isRequired,
// };

export default Home;
