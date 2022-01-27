import React, { Component } from 'react';

import InputData  from './InputData';
import {createCollectionDocument, getCollectionDocument} from './firebase.utilities';
//import ShowData from './ShowData';

class InputForm extends Component 
{

    
    constructor()
    {
    
        super();

        this.state = {
                        name:'' , 
                        collections :[],
                        isvisiable: false
                    };
    };

    handlesubmit = async event =>
    {
        
        event.preventDefault();
        const {name} = this.state; 
    
        createCollectionDocument(name,InputData);
        console.log(name);
    }

    handleOnChange = event =>
    {
        const {name , value} = event.target;
        this.setState({[name]:value}); 
    }
    
    handleSearch = async Event =>
    {
        Event.preventDefault();

       // const {name} = this.state.name;     
       
       console.log(await getCollectionDocument(this.state.name));
 
   
    }
  render() {

    return (

        <div>
            <div>
                <form onSubmit={this.handlesubmit}>
                    <input type="text" name="name" onChange={this.handleOnChange}/>
                    <br/>
                    <button>Submit</button>
                </form>
            </div>
            <div>
             <span>Get collection</span>
                <form onSubmit={this.handleSearch}>
                    <input type="text" name="name" onChange={this.handleOnChange}/>
                    <br/>
                    <button onClick={this.handleSearch}>Submit</button>
                </form>
            </div>
        </div>
        );
};
}

export default InputForm;