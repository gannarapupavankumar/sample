import React, { Children, Component } from 'react';
// import Counters from './counters';

class Counter extends Component {
   state ={
       count:0
    //    tags:["tag1","tag2","tag3"]
   };
   constructor(){
       super()
       this.handleIncrement=this.handleIncrement.bind(this);
   }

   handleIncrement(){
    // console.log("Increased",this.state.count);
    this.setState({count : this.state.count+1});
   }

    render() {   
        console.log("props",this.props)      
       
        return (
        <div>
              {/* <h4>{this.props.id}</h4> */}
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">increase </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Remove </button>
        {/* <ul>{this.state.tags.map((tag,index)=><li key={index}>{tag}</li>)}</ul> */}
        </div>);

    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
     return   this.state.count===0? "Zero" : this.state.count;
    }
}
 
export default Counter;