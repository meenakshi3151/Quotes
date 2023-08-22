import React from 'react';
import './App.css' ;
import axios from 'axios'
class App extends React.Component{
    state={
        advice:''
    };
    componentDidMount(){
        //life cycle method

        this.fetchAdvice();
console.log("hi");
    }
    fetchAdvice=()=>{
        axios.get('	https://api.adviceslip.com/advice')

        .then((response)=>{
            const {advice}=response.data.slip;
            this.setState({advice:advice});
console.log(advice);
        }).catch((error)=>{
            console.log(error);
        })
    }
    render (){
        return (
            
        <div class="page">
            <div class="advi">
                <h3>{this.state.advice}</h3>
                </div>
            <div class="btn">
                <button id="give" onClick={this.fetchAdvice}>Give Suggestion</button>
            </div>
        </div>
        )
    }
}
export default App