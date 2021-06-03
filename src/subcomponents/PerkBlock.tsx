import React, { CSSProperties, FunctionComponent } from 'react';
import {perkButton} from './types';
import Icon from './IconComponent';


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
        <div style={perk}  className='edgeBox text-gray-200' onClick={(e)=>{props.toModal(e,props.tiedPerk)}}>
          <div className='flex justify-center'>
          <p className='text-5xl'>{props.tiedPerk.cost}</p>
          </div>
          <div className='flex justify-center'>
          <p className='text-xl text-center'>{props.tiedPerk.name}</p>
          </div>
           
            <div className='flex justify-center'>
          <Icon type={props.tiedPerk.subType} include_name={false} theme='White'/>
          </div>
        </div>
    );
}


export default StatBlock;