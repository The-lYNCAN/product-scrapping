import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([])
  const [index, setIndex] = useState(-1)
  const [images, setImages] = useState([])
  useEffect(() => {
    axios({
      url: "http://localhost:2000", 
      data: [],
      method: "GET"
    }).then(res => {
      setProducts(res.data)
      setIndex(0)
    })  
  }, [])
  useEffect(() => {
    const quota = 100
    if(quota !== 100){
      if(products[index] === undefined){
        axios({
          url: "http://localhost:2000/get/product/image", 
          data: {name:"life cycle book"},
          method: "POST"
        }).then(item => {
          console.log(item);
          setImages(item.data.slice(0, 3))
        })      
      }else{
  
        axios({
          url: "http://localhost:2000/get/product/image", 
          data: {name:products[index].name},
          method: "POST"
        }).then(item => {
          console.log(item);
          setImages(item.data.slice(0, 3))
        })
      }
    }


  }, [index])
  const handleChange = () => {
    setIndex(index + 1)
  }
  const dataLoaded = () => {
    if(products[index] !== undefined){
      return <h1>{products[index].name}</h1>
    }else{
      return <h1>Not loaded yet</h1>
    }
  }
  return (
    <div className="App">
      <h1>Here is gonna be a product title and the first 3 google images for that item<br /> please select the most appropriate image for that item. If none then please select manual option for that item</h1>
      {dataLoaded()}
      <div style={{display: "flex"}}> 
      {images.map(item => (
        <img height={850} width={"33%"} src={item.url} />
      ))}
        {/* <img  /> */}
      </div>
      <button onClick={handleChange}>Next</button>
      {/* {products.length} */}
    </div>
  );
}

export default App;
