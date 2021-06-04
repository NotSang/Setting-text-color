import { Component } from "react";

class SizeSetting extends Component {
  changSize(value)
  {
    this.props.onChangeSize(value)
  }
  render()
  {
    return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">{this.props.fontSize}px</h3>
              </div>
              <div className="panel-body">
                <button type="button" className="btn btn-warning" onClick={()=>this.changSize(2)}>Up Size</button>
                <button type="button" className="btn btn-success" onClick={()=>this.changSize(-2)}>Down Size</button>
              </div>
            </div>
          </div>
          
    );
    }
  }
  
  export default SizeSetting;
  