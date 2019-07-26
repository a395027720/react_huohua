import React,{Component} from "react";
import "styles/common.css";
import "styles/reset.css"
export default class App extends Component {
  componentDidMount() {
    
  }
  render(){
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

