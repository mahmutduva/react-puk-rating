import React from 'react';
import ReactDOM from 'react-dom';
import PukRating from '../src/puk-rating';

class App extends React.Component{
    render(){
        return <PukRating/>;
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));