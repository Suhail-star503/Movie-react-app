import React from "react";
export default class Student extends React.Component{
    

render(){
    return(
        <div>
            <h1 style={{color:"white"}}>Hello {this.state.name}</h1>
        </div>
    )
}
}

