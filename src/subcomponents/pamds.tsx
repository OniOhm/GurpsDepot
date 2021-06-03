import React, { FunctionComponent, useState, useReducer, Reducer } from 'react';
import ModalView from './ModalView';

import { dataPoint, state } from './types';
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
  const [state, stateUpdate] = useState(initState);

  let Edges = props.Data.map((perk) => {
    return (
      <StatBlock key={perk.name} tiedPerk={perk}
        toModal={(e, data) => { const copy = { ...state }; copy.selectedPerk = data; copy.modalShowHide = true; stateUpdate(copy) }}
      />
    )

  })
  return (
    <div className='flex w-full h-screen flex-wrap m-0 p-0 justify-center overflow-auto'>
      {Edges}
      {state.modalShowHide && <ModalView selectedPerk={state.selectedPerk} ClickHandler={(e) => { const copy = { ...state }; copy.modalShowHide = false; stateUpdate(copy) }}
      />}
      {props.showNotFound &&
        <div className='w-full max-h-28 flex justify-center text-gray-50 mt-5'>
          <div className='grid grid-cols-1 grid-rows-2'>
            <div className='row-start-1 flex justify-center'>
              <p className='text-2xl '>Nothing found</p>
            </div>
            <div className=' row-start-2 '>
              <p className='text-2xl'>This edge may exist but had not been added yet</p>
            </div>
          </div>
          </div>}
    </div>
  )
}


export default Pamds;