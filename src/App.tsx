import React from 'react';
 import './App.css';
 import {Greet} from './components/Greet'
 import {Person} from './components/Person'
 import {PersonList} from './components/PersonList'
import {Status} from './components/Status'
import {Heading} from './components/Heading'
import {Oscar} from './components/Oscar'
function App() {

  const person ={
    first:'lee',
    last:'minho'
  }

  const nameList =[
    {
      first:'kim',
      last:'Jisoo'
    },
    {
      first:'kim',
      last:'Jennie'
    },
    {
      first:'Lisa',
      last:'Manobal'
    },
    {
      first:'Park',
      last:'Rose'
    }
  ]

  return (
    <div className="App">
       <Greet name="Dhiksha" num={127} isLoggedIn={false}/>
       <Person name={person}/>  
       <PersonList names={nameList}/>
       <Status status="loading"/>
       <Heading> Placeholder</Heading>
       <Oscar>
       <Heading> Placeholder</Heading>

       </Oscar>
    </div>
  );
}

export default App;
