import { Component } from "react";


class Menu extends Component{
render(){
    return(
        <nav>
          <ul>
              {this.props.children}
          </ul>
        </nav>
    );
}

}

export default Menu;

