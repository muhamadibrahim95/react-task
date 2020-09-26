import React from 'react';
import Post from './Post';
import './App.css';

function App() {
  return (
    <div className="App">
      <Post 
       profile="img/profile-pic.png"
       image="img/post-pic.jpg"
       name="Rajkumar"
       tag="Rajkumar"
       time="3h"
       description="this is a post"
       like={30}
     />
     <Post 
       profile="img/profile-pic.png"
       image="img/independence.jpg"
       name="muhamad ibrahim"
       tag="muhamadibrahim"
       time="5h"
       description="this is a post"
       like={50}
     />
      <Post 
       profile="img/profile-pic.png"
       image="img/valentine.jpg"
       name="Rajesh"
       tag="Rajesh"
       time="2h"
       description="this is a post"
       like={70}
     />
    </div>
  );
}

export default App;
