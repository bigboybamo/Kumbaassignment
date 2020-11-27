import React, {useState, useEffect} from "react";
import "../App.css";
// import  {Card}  from "react-bootstrap";


const ProfilePage = () => {

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
           <h1> Order Id :{objData.order_id}</h1>  
            
               <h1>Items : </h1>
               <ul>
                  {
                   objItems.map((i, idx) => {
                   return(
                     <li key={idx}>Name : {i.name} , Category: {i.category}, Price: {i.price}, Currency: {i.currency}</li>
                    )
                  })
                 }
              </ul>
  
      </div>
      )
  }
  export default ProfilePage;