import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
