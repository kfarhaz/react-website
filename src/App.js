import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Navbar, Footer} from './components';
import Home from './pages/HomePage/Home';
import  Services  from  './pages/Services/Services';
import  Products  from  './pages/Products/Products';
import  AboutUs from  './pages/About Us/AboutUs';
import  ContactUs from  './pages/Contact Us/ContactUs';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        {/* Routing START */}
        <Route  path  = "/" exact component={Home} />
        <Route  path  = "/services" exact component={Services} />
        <Route  path  = "/products" exact component={Products} />
        <Route  path  = "/about-us" exact component={AboutUs} />
        <Route  path  = "/contact-us"  exact component={ContactUs} />
        {/* Routing END */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
