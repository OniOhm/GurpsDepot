import React, { CSSProperties, FunctionComponent } from 'react';
import {perkButton} from './types';
import Icon from './IconComponent';
import anime from 'animejs';

/*Simple animation that translate the x value of each edge on mouseover(start animation).
  The exit animation moves the element back to its original place.(exit animation) */


const StatBlock: FunctionComponent<perkButton> = (props)=>{
  let perk = {} as CSSProperties;
  if(props.tiedPerk.type == 'Advantage'){
    perk = {backgroundColor: '#71A9F7'}
  }else if( props.tiedPerk.type == 'Disadvantage'){
    perk = {backgroundColor: '#FB4B4E'}
  }else if(props.tiedPerk.type == 'Skill'){
    perk = {backgroundColor: '#CB04A5'}
  }

  function animation_statblock_hover(selectElement: string, animationToggle: boolean){
    console.log('#'+selectElement)
    anime({
      targets: selectElement,
      translateY: 30
    })
    // anime object goes here. Each statblock will recieve this function and play there animation 
  }


    return(
        <div style={perk} id={props.tiedPerk.name} onMouseEnter={(e)=>{animation_statblock_hover(props.tiedPerk.name,true)}} className='edgeBox m-0 text-gray-200' onClick={(e)=>{props.toModal(e,props.tiedPerk)}}>
          <div className='flex justify-center'>
          <p className='text-3xl'>{props.tiedPerk.cost}</p>
          </div>
          <div className='flex justify-center'>
          <p className=' text-center'>{props.tiedPerk.name}</p>
          </div>
           
            <div className='flex justify-center'>
          <Icon type={props.tiedPerk.subType} include_name={false} theme='White'/>
          </div>
        </div>
    );
}


export default StatBlock;