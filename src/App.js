import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Footer/Footer';
import Registration from './Components/Registration/Registration';
import Error from './Components/Error/Error';

function App() {
  return (
    <div className="">

      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router >
    </div >
  );
}

export default App;
