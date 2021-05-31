import React, { FunctionComponent,useState,useReducer, Reducer } from 'react';
import ModalView from './ModalView';

import { dataPoint,action, state } from './types';
import StatBlock from './PerkBlock';


const initState: state = {
  selectedPerk: {
    name: '',
    description: '',
    // discriptor
    cost: '',
    type: '', 
    subType: '',
    Difficulty: '',
  },
  modalShowHide: false
  
}


const Pamds: FunctionComponent<dataPoint> = (props) => {
const [state,stateUpdate] = useState(initState);

  let Edges = props.Data.map((perk) => {
    return(
      <StatBlock key={perk.name} tiedPerk={perk}
      toModal={(e,data)=>{const copy = {...state}; copy.selectedPerk = data; copy.modalShowHide=true; stateUpdate(copy)}}
      />
    )

  })
  return (
    <div className='flex w-full h-screen flex-wrap m-0 p-0 justify-center overflow-auto'>
      {Edges}
     {state.modalShowHide &&  <ModalView selectedPerk={state.selectedPerk} ClickHandler={(e)=>{const copy = {...state}; copy.modalShowHide = false; stateUpdate(copy)}}
        />}
    </div>
  )
}


export default Pamds;