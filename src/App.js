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
import Global from "./host/Global";
import axios from "axios";
import { url } from "./host/Host";
import { FadeLoader } from "react-spinners";
export default class App extends Component {
state={
  loader:true
}
  componentDidMount() {
    window.scrollTo(0, 0);
  var a=window.location.href.split('/')
  var v=a[a.length-1]
axios.get(`${url}/school-by-admin/${v}`).then(res=>{

  Global.schoolId=res.data.id
  Global.user=a[a.length-1]
  this.setState({
    loader:false
  })
  console.log(Global.user, Global.schoolId)
})
 
  
  }

  render() {
    return (
      <div>
{
    this.state.loader?<div className="loaderT">
<FadeLoader

 color='blue' loading={this.state.loader} size={120} />        

    </div>:

        <BrowserRouter>
          <Switch>
            {/* <Route exact path="/register/uz/">
              <Register />
            </Route> */}
            <Route exact path="/login/uz">
              <Login />
            </Route>
            {/* <Route path="/cabinet/parents/">
              <ParentCabinet />
            </Route> */}
            <Route path="/cabinet/teacher/bolim/">
              <TeacherCabinet />
            </Route>

            <Route path="/cabinet/teacher/rahbar/">
              <Main />
            </Route>

            <Route exact path="/qabul/uz/:id">
              <NavBar />
              <Qabul />
              <Footer />
            </Route>

            <Route exact path="/rahbariyat/uz/:id">
              <NavBar />
              <Maktabmamuriyati />
              <Footer />
            </Route>

            <Route exact path="/yangiliklar/uz/:id">
              <NavBar />
              <Yangiliklar />
              <Footer />
            </Route>

            <Route exact path="/hayot/uz/:id">
              <NavBar />
              <MaktabHayoti />
              <Footer />
            </Route>

            <Route exact path="/alochilar/uz/:id">
              <NavBar />
              <Alochilar />
              <Footer />
            </Route>

            <Route exact path="/gallery/uz/:id">
              <NavBar />
              <Gallery />
              <Footer />
            </Route>

            <Route exact path="/yutuqlar/uz/:id">
              <NavBar />
              <Yutuqlarimiz />
              <Footer />
            </Route>

            <Route exact path="/maktaboshxonasi/uz/:id">
              <NavBar />
              <MaktabOshxonasi />
              <Footer />
            </Route>
            <Route exact path="/tadbirlar/uz/:id">
              <NavBar />
              <Tadbirlar />
              <Footer />
            </Route>

            <Route exact path="/:id">
              <BoshSahifa />
            </Route>
            <Route exact path="/uz/:id">
              <BoshSahifa />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </BrowserRouter>
        }      </div>
    );
  }
}
