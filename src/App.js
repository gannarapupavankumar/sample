import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/counter';
import 'bootstrap/dist/css/bootstrap.css';
import Counters from './components/counters';
import Navbar from './components/navbar';

class App extends React.Component {
    
    render() { 
        return (<div>
            <Navbar/>
            <Counters></Counters>
        </div>);
    }
}
 
export default App;