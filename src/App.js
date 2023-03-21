import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(55)
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1)

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increaseCount}>Increase  </button>
      <button onClick={decreaseCount}>DecreaseCount</button>
    </div>
  )
}

// const products = [
//   { name: 'laptop', price: 100000 },
//   { name: 'mobile', price: 25000 },
//   { name: 'computer', price: 150000 },
//   { name: 'bike', price: 220000 },
// ]
// {
//   products.map(product => <Product name={product.name} price={product.price}></Product>)
// }

// function Product(props) {
//   return (
//     <div className='product'>
//       <h1>Name:{props.name}</h1>
//       <h2>Price:{props.price}</h2>
//     </div>
//   )
// }
export default App;
