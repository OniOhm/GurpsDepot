import React, { CSSProperties, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Pamds from './subcomponents/pamds';

type classProps = {
  dummy: ''
}
const initState = {
  databaseData : [
    {
      name: 'Accute Senses',
      description: 'You have superior senses',
      cost: '2',
      subType: 'Physical',
      type: 'Advantage'
    }, {
      name: 'Wild Talent',
      description: 'Wild Talent enables inspired deeds Wild Talent is a supernatural mental Advantage that means you can simply do things without knowing how. It allows once/game session/level to roll as if you had a skill at IQ or DX',
      cost: '2',
      subType: 'Mental',
      type: 'Disadvantage'
    }, {
      name: 'Voice',
      description: 'You have superior senses',
      cost: '2',
      subType: 'Physical',
      type: 'Advantage'
    }, {
      name: 'Single Minded',
      description: 'You have superior senses',
      cost: '2',
      subType: 'Supernatural',
      type: 'Disadvantage'
    }, {
      name: 'Strategy',
      description: 'You have superior senses',
      cost: '2',
      subType: 'Skill',
      type: 'Skill'
    }
    
  ],
  searchValue: ''

}
function App() {
 const [state,onStateChange] = useState(initState);

//  a function to filter the database info depending on the search term provided by the input element
function FilterData(state: typeof initState,value: string){
let reg = new RegExp('^'+value)
  let newState = {...initState}
  let stuff = newState.databaseData.filter(edge => reg.test(edge.name))
  newState.databaseData = stuff;
  if(value){
    onStateChange(newState);
  }else{
    onStateChange(initState);
  }

}

    return (
      <div className=' w-full h-screen grid grid-cols-6 grid-rows-6'>
        <div className='col-start-1 row-span-full bg-yellow-300 z-20 grid grid-rows-4 grid-col-1'>
          <div className='col-start-1  flex items-center justify-center'>
            <p className='titleFont text-3xl'>Gurps Depot</p>
          </div>
          <div className='col-start-1 row-start-2 flex items-center justify-center'>
            <input type='text' onChange={(e)=>{ FilterData(state,e.target.value) }} />
          </div>
          <div className='col-start-1 row-start-3 flex items-center justify-center'>
            <p>Select toggles go here</p>
          </div>
        </div>
        <div className='col-start-2 col-span-full tray row-span-full flex'>
          <Pamds Data={state.databaseData}></Pamds>
        </div>
      </div>
    );
  
}

export default App;
