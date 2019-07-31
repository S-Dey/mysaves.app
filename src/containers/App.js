import React from 'react';
import AuthorizeReddit from './AuthorizeReddit'
import Initialization from './Initialization';
import { Route, BrowserRouter } from 'react-router-dom';
import DisplaySaves from '../components/DisplaySaves';
import DisplayButtons from '../components/DisplayButtons'
import DisplaySearch from '../components/DisplaySearch'

const App = () => {
  return ( 
    <div>
      <BrowserRouter>
        <Route path="/" exact component={AuthorizeReddit} />
        <Route path="/authorize_callback" exact component={Initialization} /> 
        <Route path="/authorize_callback" exact component={DisplayButtons} /> 
        <Route path="/authorize_callback" exact component={DisplaySearch} /> 
        <Route path="/authorize_callback" exact component={DisplaySaves} /> 
      </BrowserRouter>
    </div>
  )
}

export default App;