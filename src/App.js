import React from 'react';
import StudentTable from './StudentTable';
import Form from './Form';



import {Route,BrowserRouter as Router} from 'react-router-dom';

class  App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
  }
  render(){
  return (
 
  <Router>
    <Route path="/" exact strict component={StudentTable}></Route>
    <Route path="/register" component={Form}></Route>
  </Router>
      
  );
}
}

export default App;
