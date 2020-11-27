import React, {useState, useEffect} from "react";
import "../App.css";
// import  {Card}  from "react-bootstrap";


const OrderSummary = () => {

    const [objData, setObjData] = useState({});
    const [objItems, setObjItems] = useState([]);
    
   const fetchObj = async () => {
       const response = await fetch(`https://indapi.kumba.io/webdev/assignment`);
       const data = await response.json();
       setObjData(data);
       setObjItems(data.items);
      }
      
      useEffect(() => {
         fetchObj()
      },[]);
      
      return(
      <div> 
           <div className="orderDiv">
           
           <h1> Restaurant :{ objData.restaurant.name }</h1>  
           <p> address :{ objData.restaurant.street }</p>  
            </div>
               <h1>Items : </h1>
               <ul>
                  {
                   objItems.map((i, idx) => {
                   return(
                     <li key={idx}>Name : {i.name} , Price: {i.price}, Quantity: {i.quantity}</li>
                    )
                  })
                 }
              </ul>
  
      </div>
      )
  }
  export default OrderSummary;