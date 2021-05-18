import React, { CSSProperties } from 'react';
import logo from './logo.svg';
import './App.css';

import Pamds from './subcomponents/pamds';

type classProps = {
  dummy: ''
}
class App extends React.Component {
  constructor(props: classProps) {
    super(props);

  }
  modelHandler(data:Object){
    console.log(data);
  }
  accuteSenses = [
    {
      name: 'Accute Senses',
      description: 'You have superior senses',
      cost: '2',
      subType: 'Physical',
      type: 'Advantage'
    }, {
      name: 'Wild Talent',
      description: 'You have superior senses',
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
      subType: 'Mental',
      type: 'Disadvantage'
    }, {
      name: 'Strategy',
      description: 'You have superior senses',
      cost: '2',
      subType: 'Skill',
      type: 'Skill'
    }
  ]
  render() {
    return (
      <div className=' w-full h-screen grid grid-cols-6 grid-rows-6'>
        <div className='col-start-1 row-span-full bg-yellow-300 z-20 grid grid-rows-4 grid-col-1'>
          <div className='col-start-1  flex items-center justify-center'>
            <p className='titleFont text-3xl'>Gurps Depot</p>
          </div>
          <div className='col-start-1 row-start-2 flex items-center justify-center'>
            <input type='text' />
          </div>
          <div className='col-start-1 row-start-3 flex items-center justify-center'>
            <p>Select toggles go here</p>
          </div>
        </div>
        <div className='col-start-2 col-span-full tray row-span-full flex'>
          <Pamds Data={this.accuteSenses}></Pamds>
        </div>
      </div>
    );
  }
}

export default App;
