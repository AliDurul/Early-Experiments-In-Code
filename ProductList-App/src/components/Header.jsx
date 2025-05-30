import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import ProductContext from '../contexts/ProductContext'


const Header = () => {

  const {setData} = useContext(ProductContext)

  const url = ("https://fakestoreapi.com/products/ ")
  
  const [actualData, setActualData] = useState()

  const getData = async () => {
    const { data } = await axios(url)
    setActualData(data)
    setData(data)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleFilter = (e) => {
    setData(actualData.filter((item) => item.category === e.target.name))

    console.log(e.target.name);

  }

  return (
    <div className='Header container text-center mt-3'>
      <h1>Products List</h1>
      <div class="btn-group gap-2 mt-3" role="group" >
        <button onClick={getData} type="button" class="btn btn-outline-info" >All</button>
        <button onClick={handleFilter} type="button" name='electronics' class="btn btn-outline-primary">Electronics</button>
        <button onClick={handleFilter} type="button" class="btn btn-outline-success" name='jewelery'>Jewelery</button>
        <button onClick={handleFilter} name="men's clothing" type="button" class="btn btn-outline-danger">men's clothing</button>
        <button onClick={handleFilter} name="women's clothing" type="button" class="btn btn-outline-warning">women's clothing</button>
      </div>
    </div>
  )
}

export default Header