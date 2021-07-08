import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import EdgeList from './subcomponents/EdgeList';

const initState = {
  databaseData: [
    {
      name: 'Accute Senses',
      description: 'You have superior senses',
      cost: '2',
      subType: 'Physical',
      type: 'Advantage'
    }
    , {
      name: 'Wild Talent',
      description: 'Wild Talent enables inspired deeds Wild Talent is a supernatural mental Advantage that means you can simply do things without knowing how. It allows once/game session/level to roll as if you had a skill at IQ or DX',
      cost: '2',
      subType: 'Mental',
      type: 'Disadvantage'
    }, {
      name: 'Voice',
      description:  `Voice is a mundane physical Advantage that means your voice is naturally clear, resonant, and attractive.
        \n
      Bonus: +2 to Diplomacy, Fast-Talk, Mimicry, Performance, Politics, Public Speaking, Sex Appeal, Singing and anyone who can hear you.`,
      cost: '2',
      subType: 'Social',
      type: 'Advantage'
    }, {
      name: 'Single Minded',
      description: 'Single-Minded is a mundane mental Advantage that grants you +3 to success rolls for any lengthy mental task you concentrate on to the exclusion of other activities.',
      cost: '2',
      subType: 'Supernatural',
      type: 'Disadvantage'
    }, {
      name: 'Strategy',
      description: `Strategy (IQ/Hard) is the ability to plan military actions and predict the actions of the enemy.

      Requires specialization (Land, Naval, Space, etc) which default to each other at -4.`,
      cost: '2',
      subType: 'Skill',
      type: 'Skill'
    },   {
      name: 'Accurte',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non mollis turpis, ut eleifend velit. Sed bibendum magna justo, tristique mattis elit euismod vitae. Quisque tristique sapien vel lacus semper sollicitudin. In pellentesque felis finibus, condimentum risus posuere, tincidunt justo. Morbi a ipsum egestas, volutpat urna convallis, viverra nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus vulputate felis id est rutrum, a ullamcorper metus laoreet.

      In hac habitasse platea dictumst. In eleifend vestibulum ipsum, in blandit turpis pharetra at. Mauris tristique pulvinar pulvinar. Vestibulum aliquam, sem nec sagittis volutpat, diam nibh feugiat nulla, vel faucibus sapien magna vitae sem. Nunc sed dapibus orci. Morbi iaculis tempor ex, in euismod diam egestas id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean molestie finibus ligula, quis tristique dolor dictum et.`,
      cost: '2',
      subType: 'Physical',
      type: 'Advantage'
    }
    , {
      name: 'Talent',
      description: 'Wild Talent enables inspired deeds Wild Talent is a supernatural mental Advantage that means you can simply do things without knowing how. It allows once/game session/level to roll as if you had a skill at IQ or DX',
      cost: '2',
      subType: 'Mental',
      type: 'Disadvantage'
    }, {
      name: 'Smell',
      description: 'You have superior senses',
      cost: '2',
      subType: 'Social',
      type: 'Advantage'
    }, {
      name: 'Multi Minded',
      description: 'You have superior senses',
      cost: '2',
      subType: 'Supernatural',
      type: 'Disadvantage'
    }, {
      name: 'Tactics',
      description: 'You have superior senses',
      cost: '2',
      subType: 'Skill',
      type: 'Skill'
    },{
      name: 'Something',
      description: 'You have superior senses',
      cost: '10',
      subType: 'Supernatural',
      type: 'Advantage'
    }
  ],
  searchValue: '',
  showNotFound: false,
  characterPoints: 250

}
function App() {
  // on state change is changed when the onStateChange function is called 
  const [state, onStateChange] = useState(initState);

  //  a function to filter the database info depending on the search term provided by the input element
  // get rid of the state paremeter
  function FilterData(state: typeof initState, value: string) {
    let reg = new RegExp('^' + value)
    let newState = { ...initState }
    let stuff = newState.databaseData.filter(edge => reg.test(edge.name))
    newState.databaseData = stuff;
    if (value) {
      if(newState.databaseData.length === 0) {
        newState.showNotFound = true;
      }else{
        newState.showNotFound = false;
      }
      onStateChange(newState);
    } else {
      onStateChange(initState);
    }

  }
  function edgeHandler(costOfEdge: string){
    let newState = {...state};
    // not dijobu. change in future
    newState.characterPoints-= parseInt(costOfEdge);
    onStateChange(newState);
    console.log(state.characterPoints);
  }

  return (
    <div className=' w-full h-screen grid grid-cols-6 grid-rows-6'>
      <div className='col-start-1 w-72 col-span-2 max-w-md row-span-full bg-yellow-300 z-20 grid grid-rows-4 grid-col-1'>
        <div className='col-start-1  flex items-center justify-center'>
          <p className='titleFont text-3xl'>Gurps Depot</p>
        </div>
        <div className='col-start-1 row-start-2 flex items-center justify-center'>
          <input type='text' onChange={(e) => { FilterData(state, e.target.value) }} />
        </div>
        <div className='col-start-1 row-start-3 flex items-center justify-center'>
          <input className='h-20 w-10 titleFont text-xl bg-yellow-300 text-center' value={state.characterPoints} placeholder='350' />
        </div>
      </div>
      <div className='col-start-3 col-span-full tray row-span-full flex'>
        {/* implement an second instance of EdgeList and conditionally render one or the other based on a onClick event
          This second EdgeList,named PurchasedList, that recieves a state variable(<Array>: Edge) for its data attribute.
          Purchased list will need events to handle viewing purhcased edges and removing purchased edges from the purchased list.
          TO handle the addition of these new events a Reducer will need to be implmented to handle all events for both the EdgeList
          and the PurchasedList */}
        <EdgeList Data={state.databaseData} characterPoints={state.characterPoints} purchaseHandler={(e,data)=>{edgeHandler(data)}} showNotFound={state.showNotFound}></EdgeList>
      </div>
    </div>
  );

}

export default App;
