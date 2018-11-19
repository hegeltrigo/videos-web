import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import Main from './components/Main/Main/Main'
class App extends Component {
  render() {
    return (
      <div>
         <Layout>
           <Main/>
         </Layout>
      </div>
    );
  }
}

export default App;
