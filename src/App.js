import { Component } from 'react';
import './App.css';
import Counter from './Counter/Counter';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem/MenuItem';
import RandomColorSquare from './RandomColorSqueare/RandomColorSquare';
import SpecialButton from './SpecialButton/SpecialButton';
import Toggle from './Toggle/Toggle';

class App extends Component{
  render(){
    return(
    <div className="App">
         <Menu>
           <MenuItem route="/">Home</MenuItem>
           <MenuItem route="/">About</MenuItem>
           <MenuItem route="/">Services</MenuItem>
           <MenuItem route="/">Contact us</MenuItem>
           <hr/>
           <SpecialButton/>
           <hr/>
           <Counter/>
           <Toggle/>
           <RandomColorSquare/>
         </Menu>
    </div>
    );
  }
}
export default App;
