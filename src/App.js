import './App.css';

import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      color:'red',
      fontSize:12
    }
    this.onSetColor=this.onSetColor.bind(this);
    this.onChangeSize=this.onChangeSize.bind(this);
    this.onSettingDefault=this.onSettingDefault.bind(this);
  }
  onSetColor(params)
  {
    this.setState({
      color:params
    })
  }
  onChangeSize(value)
  {
    if(this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36)
    {
      this.setState({
        fontSize:this.state.fontSize + value
      })
    }

  }
  onSettingDefault(value)
  {
    this.setState({
      color: 'red'
      ,
      fontSize:12
    })
  }
  render(){
  return (
    <div className="container mt-50">
      <div className="row">
        <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}/>
        <div>
          <SizeSetting fontSize={this.state.fontSize} onChangeSize={this.onChangeSize}/>
          <Reset onSettingDefault={this.onSettingDefault }/>
        </div>
      </div>
      <Result color={this.state.color} fontSize={this.state.fontSize}/>
    </div>
   
  );
  }
}

export default App;
