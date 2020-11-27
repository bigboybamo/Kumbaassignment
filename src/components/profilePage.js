import React, {Component} from "react";
import "../App.css";
import logo from "../face-small.jpg"
 import  { Card }  from "react-bootstrap";


export default class ProfilePage extends Component {
    constructor(props) {
      super(props);
      this.state = { 
          
          user: [],
          likes: [],
          dislikes: []
        };
    }
  
    
    
  
    async componentDidMount() {
      const response = await fetch(`https://indapi.kumba.io/webdev/assignment`);
      const json = await response.json();
      console.log(json)
      this.setState({ user: json.user });
      this.setState({ likes: json.user.likes });
      this.setState({ dislikes: json.user.dislikes });
      
    }
  
    
  
    render() {

        const {user, likes, dislikes} = this.state
      
      return (
          <div className="bodyDiv">
               <h1>Profile Page</h1>
            <div className="row">
               
            <Card classname="cardA" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={logo} />
  <Card.Body>
    <Card.Title>{user.name}</Card.Title>
    <Card.Text>
      {user.phone}
    </Card.Text>
    <Card.Text>
      {user.address}
    </Card.Text>
    <Card.Text>
      {user.about}
    </Card.Text>
  </Card.Body>
</Card>
      </div>
      </div>
      
      );
    }
  }