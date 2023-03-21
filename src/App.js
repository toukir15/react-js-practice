import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: 'laptop', price: 100000 },
    { name: 'mobile', price: 25000 },
    { name: 'computer', price: 150000 },
    { name: 'bike', price: 220000 },
  ]
  return (
    <div className="App">
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
    </div>
  );
}

function Product(props) {
  return (
    <div className='product'>
      <h1>Name:{props.name}</h1>
      <h2>Price:{props.price}</h2>
    </div>
  )
}
export default App;
