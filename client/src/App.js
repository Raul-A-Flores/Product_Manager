import './App.css';
import ProductForm from './components/ProductForm';
import {
  BrowserRouter,
  Link,
  Route,
  Switch
} from 'react-router-dom'
import OneProudct from './components/OneProudct';
import EditProduct from './components/EditProduct';
import {useState} from 'react';

function App() {
  
  const [newProductToggle, setNewProductToggle] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
      <Link to="/">Home</Link>
      <Switch>
        <Route exact path="/">
          <ProductForm newProductToggle= {newProductToggle} setNewProductToggle={setNewProductToggle}/>
        </Route>
        <Route exact path="/Products/:id">
          <OneProudct/>
        </Route>
        <Route exact path="/:id/edit">
          <EditProduct/>
        </Route>

          <ProductForm/>
      </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
