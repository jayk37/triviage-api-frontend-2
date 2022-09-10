import React from "react";
import 'tachyons';
class Display extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.fact}</h2>
            </div>
        )
    }
}
export default Display;
