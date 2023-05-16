import React, { Component } from 'react';
import { AppBar, IconButton, Toolbar} from '@material-ui/core';
import {RxTextAlignJustify} from 'react-icons/rx';
import {CgSearch} from 'react-icons/cg';
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { BsBell } from "react-icons/bs";



class App extends Component {
  render() {
    return (
      <div>
      <AppBar position='sticky' style={{ backgroundColor: "white" }}>
        <Toolbar>
          <img src="logo.png" alt="logo" style={{ height: 25 }} />
          <IconButton aria-label='app'>
          
          
            <RxTextAlignJustify size={30} style={{ color: "black" }}/>
            <CgSearch size={30} style={{ paddingLeft: 1500 , color: "black"}}/>
            <BsFillChatLeftTextFill size={30} style={{paddingLeft: 50,color: "black"}}/>
            <BsBell size={30} style={{paddingLeft: 50,color: "black"}}/>

          </IconButton>
         
          
          
        </Toolbar>
      </AppBar>
      
      </div>
       
    )
  }
}
export default App;


