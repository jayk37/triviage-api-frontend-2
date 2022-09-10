import React from "react";
import 'tachyons';
class Click extends React.Component{
    render(){
        return(
            <input type="submit" value="Click here to display a fact" className="tc pa3 bg-light-blue br-pill georgia grow" onClick={this.props.searchchange}/>
        )
    }
}
export default Click;