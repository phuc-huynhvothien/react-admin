import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import CustomerList from './Customer/CustomerList';
import Loader from './Loader/Loader';

function Home() {
  const [customers, setCustomers] = useState([]);
  const [url, setUrl] = useState("/customers");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [seed, setSeed] = useState();
  async function getList(){
    setLoading(true);
    axios.get(url).then(response => {
      setCustomers(response.data);
      setLoading(false);
    }).catch(
      error => {
        console.log(error);
        setError(true);
      }
    );
  }
  function handleDelete(id){
    axios.delete(url+`/${id}`).then(request =>{
      alert("DONE");
      setSeed(Math.random());
    }).catch(error => {
      console.log(error);
    });
  }


  useEffect(() =>{
    getList();
  },[]);

  useEffect(() =>{
    console.log("GOOOOOO");
    getList();
  },[seed]);

  return (
    <div className="ui main container">
      {/* <MyForm /> */}
      {loading ? <Loader /> : ""}
      <CustomerList customers={customers} onDelete={handleDelete} />
    </div>
  );
}

export default Home;
