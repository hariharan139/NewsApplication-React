import logo from './logo.svg';
import './App.css';
import ProductCard from './ProductCard';
import Counter from './Counter';
import FormHandling from './FormHandling';
function App() {
  const items = [
    { id: 1, name: 'Camera', price: 999 },
    { id: 2, name: 'Tents', price: 999 },
    { id: 3, name: 'Luggage Bags', price: 999 },
    { id: 4, name: 'Power Banks',  price: 999 },
    { id: 5, name: 'Sleeping Bags',  price: 999 },
    { id: 6, name: 'Hammocks(1 Person)', price: 999 },
    { id: 7, name: 'Binoculars', price: 999 },
    { id: 8, name: 'Shoes',  price: 999 },
  ];
  return (
    <div >
      <ProductCard items={items} />
      <Counter/>
      <FormHandling/>
    </div>
  );
}

export default App;
