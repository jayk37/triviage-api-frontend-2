import React from "react";
import 'tachyons';
import Click from './Click'
import Display from './Display';
class Containers extends React.Component{
    constructor()
    {
        super()
        this.state={
            datadisp:''
        }
    }
    onSearchChange=(event)=>{
        let x=this.props.name;
        const p=Math.floor(Math.random() * 1000);
        const url='http://numbersapi.com/'
        if(x==="Maths")
        {
            const newrl=url+p+"/math?json";
            let d1=fetch(newrl)
            let d2=d1.then(result=>result.json())
            let d3=d2.then(data=>{
                let p22= data.text;
                this.setState({datadisp:p22});
            });
        }
        else if(x==="Trivia")
        {
            const newrl=url+"random/trivia?json";
            let d1=fetch(newrl)
            let d2=d1.then(result=>result.json())
            let d3=d2.then(data=>{
                let p22= data.text;
                this.setState({datadisp:p22});
            });
        }
        else if(x==="Date")
        {
            const c1=Math.floor(Math.random() * 10)+1;
            const c2=Math.floor(Math.random() * 27)+1;
            const newrl=url+c1+"/"+c2+"/date?json";
            let d1=fetch(newrl)
            let d2=d1.then(result=>result.json())
            let d3=d2.then(data=>{
                let p22= data.text;
                this.setState({datadisp:p22});
            });
        }
        else
        {
            console.log("Error");
        }
    }
    render(){
        const passdata = this.state.datadisp;
        return(
            <div className="f4 bg-light-purple dib br3 pa3 ma3 bb grow">
                <h2>{this.props.name}</h2>
                <Click searchchange={this.onSearchChange}/>
                <Display fact={passdata}/>
            </div>
        )
    }
}
export default Containers;