import React, { FunctionComponent,useState } from 'react';
import ModalView from './ModalView';

import { dataPoint } from './types';
import StatBlock from './PerkBlock';




const Pamds: FunctionComponent<dataPoint> = (props) => {
const [modal,ModalShowHide] = useState(true);
  let Edges = props.Data.map((advantage) => {
    return(
      <StatBlock key={advantage.name} name={advantage.name}
      description={advantage.description}
      cost={advantage.cost}
      type={advantage.type}
      subType={advantage.subType}
      Difficulty={advantage.Difficulty}/>
    )

  })
  return (
    <div className='flex w-full h-screen flex-wrap m-0 p-0 justify-center overflow-auto'>
      {Edges}
     {modal &&  <ModalView perkInfo={ {name: 'Single Minded',
      description: 'You have superior senses',
      cost: '2',
      subType: 'Mental',
      type: 'Disadvantage'}} ClickHandler={(e)=>{ModalShowHide(modal ? false: true)}}
        />}
    </div>
  )
}


export default Pamds;