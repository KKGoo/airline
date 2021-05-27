import React, {useState, useEffect} from "react";

import Menu from "../components/menu";

const Home = () => {
    const [data,setData]=useState([ { "id": "1", "name": "Vivair" }]);
    const getData=()=>{
      fetch('data.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          setData(myJson)
        });
    }
    useEffect(()=>{
      getData()
      console.log(data)
    },[])
      
  return (
      
    <div className="Container">
        <div className="Menu__container">
            <Menu data={data}/>
        </div>
    </div>
  );
};

export default Home;