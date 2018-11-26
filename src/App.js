import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Videos from './containers/Videos/Videos'
import {Route} from 'react-router-dom'
import NewVideo  from './containers/Videos/NewVideo/NewVideo';
import MyVideos  from './containers/profile/MyVideos/MyVideos';
import Login from './containers/users/Login/Login'

class App extends Component {

  render() {
    return (
      <div>
         <Layout>
           <Route path="/" exact component={Videos}/>
           <Route path="/newVideo" component={NewVideo}/>
           <Route path="/MyVideos" component={MyVideos}/>
           <Route path="/Login" component={Login}/>

         </Layout>
      </div>
    );
  }
}

export default App;
