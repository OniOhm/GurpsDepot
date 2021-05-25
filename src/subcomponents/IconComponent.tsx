import React, { FunctionComponent } from 'react';
import { icon } from './types';
import Social from '../assets/1x/Social.png';
import Mental from '../assets/1x/Mental.png';
import Exotic from '../assets/1x/Exotic.png';
import Physical from '../assets/1x/Physical.png';
import Supernatural from '../assets/1x/Supernatural.png';
import Mundane from '../assets/1x/Mundane.png';
import Skill from '../assets/1x/Skill.png';


const Icon: FunctionComponent<icon> = (props) =>{
    let currentIcon = '';
    switch(props.type){
        case 'Physical':
          currentIcon = Physical;
          break;
        case 'Mental':
          currentIcon = Mental;
          break;
        case 'Mundane':
          currentIcon = Mundane;
          break;
        case 'Supernatural':
          currentIcon = Supernatural;
          break;
        case 'Social':
          currentIcon = Social;
          break;
        case 'Exotic':
          currentIcon = Exotic;
          break;
        case 'Skill':
          currentIcon = Skill;
          break;
        default:
          currentIcon = '';
      }
    return(
        <div className='bg-green-400 w-5 h-18'>
            <img className='image-big' src={currentIcon}></img>
        </div>
    )
}

export default Icon;