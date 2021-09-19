// import { BrowserRouter,Route,Switch } from 'react-router-dom';
// import './App.css';
// import Home from "./component/Home"
// import Contact from "./component/Contact"
// import About from "./component/About"
// import Error from './component/Error';
// import Menu from './component/Menu';

import MyHeader from "./component/PORTFOLIO/MyHeader";
import MyNav from "./component/PORTFOLIO/MyNav";
import MySection from "./component/PORTFOLIO/MySection";
import Portfolio from "./NewProject/Portfolio";


// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <Menu/>
 
//       <Switch>
//         <Route exact path="/" component={Home}/>
//         <Route exact path="/1" component={Contact}/>
//         <Route exact path="/2" component={About}/>
//         <Route path="" component={Error}/>
//        </Switch>
//       </BrowserRouter>
     
//     </div>
//   );
// }

// export default App;

// import New from "./component/FormLogin"

// import './App.css';
// // import Useref from "./component/Useref";
// import FormLogin from "./component/FormLogin";
// import Home from "./component2/Home";

function App() {
  return (
    <div className="App">
 
      {/* <FormLogin/> */}
 
      {/* <Useref/> */}
      {/* <Home/> */}
      <MyNav/>
      <MyHeader/>
      <MySection/>
      {/* <Portfolio/> */}
    </div>
  );
}

export default App;

