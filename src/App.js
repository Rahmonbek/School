import React, { Component } from "react";
import ParentCabinet from "./pages/ParentCabinet";
import MaktabHayoti from "./pages/MaktabHayoti";
import BoshSahifa from "./pages/BoshSahifa";
import Qabul from "./pages/Qabul";
import Yangiliklar from "./pages/Yangiliklar";
import MaktabOshxonasi from "./pages/MaktabOshxonasi";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Gallery from "./pages/gallery";
import Login from "./pages/Login/Login";
import Alochilar from "./pages/alochilar";
import Yutuqlarimiz from "./pages/yutuqlarimiz";
import NavBar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Error from "./pages/Error";
import Tadbirlar from "./pages/Tadbirlar";
import TeacherCabinet from "./pages/TeacherCabinet";
import Main from "./pages/Rahbar/Main";
import Maktabmamuriyati from "./pages/maktabmamuriyati";
import MaktabTadbirlari from "./pages/MaktabTadbirlari";
import Register from "./pages/Login/Register";
export default class componentName extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/register/uz">
              <Register />
            </Route>
            <Route exact path="/login/uz">
              <Login />
            </Route>
            <Route path="/cabinet/parents">
              <ParentCabinet />
            </Route>
            <Route path="/cabinet/teacher/bolim">
              <TeacherCabinet />
            </Route>

            <Route path="/cabinet/teacher/rahbar">
              <Main />
            </Route>

            <Route exact path="/qabul/uz">
              <NavBar />
              <Qabul />
              <Footer />
            </Route>

            <Route exact path="/rahbariyat/uz">
              <NavBar />
              <Maktabmamuriyati />
              <Footer />
            </Route>

            <Route exact path="/yangiliklar/uz">
              <NavBar />
              <Yangiliklar />
              <Footer />
            </Route>

            <Route exact path="/hayot/uz">
              <NavBar />
              <MaktabHayoti />
              <Footer />
            </Route>

            <Route exact path="/alochilar/uz">
              <NavBar />
              <Alochilar />
              <Footer />
            </Route>

            <Route exact path="/gallery/uz">
              <NavBar />
              <Gallery />
              <Footer />
            </Route>

            <Route exact path="/yutuqlar/uz">
              <NavBar />
              <Yutuqlarimiz />
              <Footer />
            </Route>

            <Route exact path="/maktaboshxonasi/uz">
              <NavBar />
              <MaktabOshxonasi />
              <Footer />
            </Route>
            <Route exact path="/tadbirlar/uz">
              <NavBar />
              <Tadbirlar />
              <Footer />
            </Route>

            <Route exact path="/">
              <BoshSahifa />
            </Route>
            <Route exact path="/uz">
              <BoshSahifa />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
