import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Videos from './containers/Videos/Videos'

class App extends Component {

  render() {
    return (
      <div>
         <Layout>
           <Videos/>
         </Layout>
      </div>
    );
  }
}

export default App;
