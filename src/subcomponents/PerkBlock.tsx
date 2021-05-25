import React, { CSSProperties, FunctionComponent } from 'react';
import {perkBlock, perkButton} from './types';
import Social from '../assets/1x/Social.png';
import Mental from '../assets/1x/Mental.png';
import Exotic from '../assets/1x/Exotic.png';
import Physical from '../assets/1x/Physical.png';
import Supernatural from '../assets/1x/Supernatural.png';
import Mundane from '../assets/1x/Mundane.png';
import Skill from '../assets/1x/Skill.png';
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

  let typePick = '';
switch(props.tiedPerk.subType){
  case 'Physical':
    typePick = Physical;
    break;
  case 'Mental':
    typePick = Mental;
    break;
  case 'Mundane':
    typePick = Mundane;
    break;
  case 'Supernatural':
    typePick = Supernatural;
    break;
  case 'Social':
    typePick = Social;
    break;
  case 'Exotic':
    typePick = Exotic;
    break;
  case 'Skill':
    typePick = Skill;
    break;
  default:
    typePick = '';
}

    return(
        <div style={perk}  className='max-w-xs w-72 max-h-20 p-4 m-3 grid  rounded grid-row-3 grid-cols-2  text-gray-200' onClick={(e)=>{props.toModal(e,props.tiedPerk)}}>
          <p className='row-start-1 col-start-1'>{props.tiedPerk.subType}</p>
          <div className='row-start-1 col-start-2 flex justify-end items-center'>
          <p className='row-start-1 col-start-2 flex justify-end '>{props.tiedPerk.cost}</p>
          {/* This is not the correct way it should be done. this should be a svg */}
          <img src={typePick} className='ml-2'></img>
          </div>
            <p className='row-start-2 col-start-1 text-xl'>{props.tiedPerk.name}</p>
          
        </div>
    );
}


export default StatBlock;