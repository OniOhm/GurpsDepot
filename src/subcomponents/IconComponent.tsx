import React, { FunctionComponent } from 'react';
import { icon } from './types';
import Social_bk from '../assets/1x/Social_bk.png';
import Mental_bk from '../assets/1x/Mental_bk.png';
import Exotic_bk from '../assets/1x/Exotic_bk.png';
import Physical_bk from '../assets/1x/Physical_bk.png';
import Supernatural_bk from '../assets/1x/Supernatural_bk.png';
import Mundane_bk from '../assets/1x/Mundane_bk.png';
import Skill_bk from '../assets/1x/Skill_bk.png';
import Social_wh from '../assets/1x/Social_wh.png';
import Mental_wh from '../assets/1x/Mental_wh.png';
import Exotic_wh from '../assets/1x/Exotic_wh.png';
import Physical_wh from '../assets/1x/Physical_wh.png';
import Supernatural_wh from '../assets/1x/Supernatural_wh.png';
import Mundane_wh from '../assets/1x/Mundane_wh.png';
import Skill_wh from '../assets/1x/Skill_wh.png';


const Icon: FunctionComponent<icon> = (props) =>{
    let currentIcon = '';
    if(props.theme ==='White'){
    switch(props.type){
        case 'Physical':
          currentIcon = Physical_wh;
          break;
        case 'Mental':
          currentIcon = Mental_wh;
          break;
        case 'Mundane':
          currentIcon = Mundane_wh;
          break;
        case 'Supernatural':
          currentIcon = Supernatural_wh;
          break;
        case 'Social':
          currentIcon = Social_wh;
          break;
        case 'Exotic':
          currentIcon = Exotic_wh;
          break;
        case 'Skill':
          currentIcon = Skill_wh;
          break;
        default:
          currentIcon = '';
      }
    }
    if(props.theme ==='Black'){
      switch(props.type){
        case 'Physical':
          currentIcon = Physical_bk;
          break;
        case 'Mental':
          currentIcon = Mental_bk;
          break;
        case 'Mundane':
          currentIcon = Mundane_bk;
          break;
        case 'Supernatural':
          currentIcon = Supernatural_bk;
          break;
        case 'Social':
          currentIcon = Social_bk;
          break;
        case 'Exotic':
          currentIcon = Exotic_bk;
          break;
        case 'Skill':
          currentIcon = Skill_bk;
          break;
        default:
          currentIcon = '';
      }
    }
    return(
            // need to add Sizing value to component type
            <div className='grid grid-cols-1 grid-rows-2'>
            <div className='flex justify-center'>
            <img className='block'  src={currentIcon}></img>
            </div>
            <div className='flex justify-center'>
            {props.include_name && <p>{props.type}</p>}
            </div>
          
            </div>

    )
}

export default Icon;