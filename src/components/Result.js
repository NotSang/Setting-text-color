import { Component } from "react";

class Result extends Component{
  
  setStyle()
  {
    return{
      color:this.props.color,
      fontSize:this.props.fontSize
    }
  }
  render(){
    return (
      
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <p>Color: {this.props.color} FontSize: {this.props.fontSize}</p>
            <div id="content" style={this.setStyle()}>
              Setting infomation
              </div>
          </div>
          
        
        
    
    );
  }
  }
  
  export default Result;
  