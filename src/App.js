import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Main from './components/Main/Main/Main';
import axios from 'axios';

class App extends Component {

  state = {
    videos: []
  }


  componentDidMount() {
    axios.get(`http://localhost:3001/api/v1/videos`)
      .then(res => {
        const videos = res.data;
        console.log(videos)
        this.setState({ videos });
      })
  }

  render() {
    return (
      <div>
         <Layout>
           <Main videos={this.state.videos}/>
         </Layout>
      </div>
    );
  }
}

export default App;
