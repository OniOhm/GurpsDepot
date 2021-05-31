import React, { CSSProperties, FunctionComponent } from 'react';
import {perkBlock, perkButton} from './types';
import Social from '../assets/1x/Social_wh.png';
import Mental from '../assets/1x/Mental_wh.png';
import Exotic from '../assets/1x/Exotic_wh.png';
import Physical from '../assets/1x/Physical_wh.png';
import Supernatural from '../assets/1x/Supernatural_wh.png';
import Mundane from '../assets/1x/Mundane_wh.png';
import Skill from '../assets/1x/Skill_wh.png';
import Icon from './IconComponent';
// Designing a compnent for varies perks(skills, advantages,disadvantages)

const StatBlock: FunctionComponent<perkButton> = (props)=>{
  let perk = {} as CSSProperties;
  if(props.tiedPerk.type == 'Advantage'){
    perk = {backgroundColor: '#71A9F7'}
  }else if( props.tiedPerk.type == 'Disadvantage'){
    perk = {backgroundColor: '#FB4B4E'}
  }else if(props.tiedPerk.type == 'Skill'){
    perk = {backgroundColor: '#CB04A5'}
  }



    return(
        <div style={perk}  className='max-w-xs w-72 max-h-20 p-4 m-3 grid  rounded grid-row-1 grid-cols-3  text-gray-200' onClick={(e)=>{props.toModal(e,props.tiedPerk)}}>
          <div className=' col-start-1 flex items-center justify-center'>
          <p className='text-3xl'>{props.tiedPerk.cost}</p>
          </div>
          <div className='col-start-2 flex items-center justify-center'>
          <p className='text-xl text-center'>{props.tiedPerk.name}</p>
          </div>
           
            <div className='w-20 flex h-full items-center justify-center col-start-3'>
          <Icon type={props.tiedPerk.subType} include_name={false} theme='White'/>
          </div>
        </div>
    );
}


export default StatBlock;