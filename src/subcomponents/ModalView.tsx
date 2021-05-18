import React, { FunctionComponent } from 'react';
import { typeCLick } from './types';


const ModalView: FunctionComponent<typeCLick> = (props) => {

    return (
        <div className='fixed w-full h-screen  flex justify-center items-center'>

            <div className='bg-gray-900 opacity-70 w-full h-screen fixed' onClick={props.ClickHandler}></div>
            <div className='bg-gray-50 w-1/2 h-1/2 z-20 grid-rows-3 grid-cols-4 grid rounded p-4'>
                {/* header */}
                <div className='w-90  row-start-1 flex items-center row-span-3 flex-wrap justify-evenly'>
                    <p className='text-2xl'> {props.perkInfo.type}</p>
                    <p className='text-3xl font-bold'>{props.perkInfo.name}</p>

                    <p className='text-2xl'>{props.perkInfo.cost}</p>


                </div>
                {/* content */}
                <div className='w-full mr-2 mt-4  row-start-1 col-start-2 col-span-2 flex'>
                    <p className='text-xl ml-3'>{props.perkInfo.description}</p>
                </div>
                {/* footer/buttons */}
                <div className='w-full row-start-3 col-start-4 flex justify-end items-end'>
                    <button className='bg-red-500 text-gray-100 w-20 h-12 p-2 rounded' onClick={props.ClickHandler}>close</button>
                </div>
            </div>
        </div>
    );
};


export default ModalView;