import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import db from './firebase';
import {collection, addDoc, setDoc, doc} from 'firebase/firestore'

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
    }
    if(products[index] === undefined){
      axios({
        url: "http://localhost:2000/get/product/image", 
        data: {name:"HALDIRAM FATAFAT BHEL 150 G"},
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
  const handleimgClick = async (imgurl, e) => {
    console.log(imgurl);
    console.log("click on an image");
    const newId = doc(collection(db, "Product and images")).id;

    const docRef = doc(db, "products", newId);
    const barcode = Number(products[index].barcode)

    await setDoc(docRef, {
      productName: products[index].name,
      salePrice: (products[index].price).toString(),
      productImages: [imgurl],
      categoryId: "",
      createdAt: "",
      deliveryTime: "",
      fullPrice: "100",
      isSale: true,
      productDescription: "",
      productId: newId,
      categoryName: "",
      updatedAt: "",
      // add more fields as needed
    }).then(res => {
      setIndex(index + 1)
    })
  }
  return (
    <div className="App">
      <h1>Here is gonna be a product title and the first 3 google images for that item<br /> please select the most appropriate image for that item. If none then please select manual option for that item</h1>
      {dataLoaded()}
      <div style={{display: "flex"}}> 
      {images.map(item => (
        <img onClick={(e) => {handleimgClick(item.url, e)}} height={850} width={"33%"} src={item.url} />
      ))}
        {/* <img  /> */}
      </div>
      <button onClick={handleChange}>Next</button>
      {/* {products.length} */}
    </div>
  );
}

export default App;