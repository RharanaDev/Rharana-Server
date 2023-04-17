import React, { Component } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./MainPage";
import Video from "./Video";

export default class App extends Component{
  render()
  {
    return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route index element = {<MainPage/>}></Route>
              <Route path = "play/:id" element = {<Video/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
    )
  }
};