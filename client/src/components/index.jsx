import React from 'react';
import ReactDOM from 'react-dom';
import Random from './random.jsx';

class App extends React.Component {
    constructor(props){
      super(props);
    }

    render(){
        return(
          <div>
            <Random />
          </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));