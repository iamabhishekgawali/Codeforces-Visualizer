import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import UserInfo from './components/UserInfo';
import Rating from './components/Rating';
import ProblemLevel from './components/ProblemLevel';

function InputStyle(event) {
  if (event.target.value === '') {
    event.target.style = "border-color: rgb(247, 244, 242)"
    event.target.style = "border-width: 0 0 1.5px;"
  }
  else {
    event.target.style = "border-color: red"
  }
}

function App() {

  const [Lists, ChangeUserList] = useState([])
  const inputreference = useRef()


  return (
    <div className="Main">

      <Navbar />

      <div className="Input-Card">
        <input ref={inputreference} type="text" onKeyDown={Keydown} placeholder="Enter codeforces handle" onChange={InputStyle} ></input>
      </div>

        {
          Lists.map((element, index) => (
            <div className="Components" key={index}>{element}</div>
          ))
        }
        
    </div>
  );

  async function FetchAPI() {
    try {
      const response = await fetch(`https://codeforces.com/api/user.info?handles=${inputreference.current.value}`, {
        method: 'GET'
      })
        .then(function (response) { return response.json(); })
      console.log(response)

      if(response.status === 'OK')
    {
        ChangeUserList((prevState) => {
        return [<UserInfo props = {response.result} ></UserInfo>,<Rating props = {inputreference.current.value} ></Rating>,<ProblemLevel  props = {inputreference.current.value}></ProblemLevel>]
      })
    }
    else
    {
      ChangeUserList((prevState) => {
        return [<div className = "Components" >Invalid Handle Name</div>]
      })
    }

    }
    catch (err) {
    }

  }

  function Keydown(event) {
    if (event.which == 13) {
      console.log("Enter key pressed")
      FetchAPI()
    }
  }
}

export default App;
