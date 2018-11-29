import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Videos from './containers/Videos/Videos'
import {Route} from 'react-router-dom'
import MyVideos  from './containers/profile/MyVideos/MyVideos';
import Login from './containers/users/Login/Login'
import Logout from './containers/users/Logout/Logout'
import NewVideo from './containers/profile/NewVideo/NewVideo'

class App extends Component {

  render() {
    return (
      <div>
         <Layout>
           <Route path="/" exact component={Videos}/>
           <Route path="/MyVideos" component={MyVideos}/>
           <Route path="/Logout" component={Logout}/>
           <Route path="/NewVideo" component={NewVideo}/>


           <Route path="/Login" component={Login}/>

         </Layout>
      </div>
    );
  }
}

export default App;
