import React, { FunctionComponent } from "react";
import { typeClick } from "./types";
import Icon from "./IconComponent";

const ModalView: FunctionComponent<typeClick> = (props) => {
  return (
    <div className="fixed w-full h-screen  flex justify-center items-center">
      <div
        className="bg-gray-900 opacity-70 w-full h-screen fixed"
        onClick={props.ClickHandler}
      ></div>
      <div className="bg-gray-50 w-2/5 h-3/4 z-20 grid-rows-4 grid-cols-4 grid rounded p-4">
        {/* header */}
        <div className=" row-start-1 col-start-1  row-span-4">
          <div className="  mb-6 text-center">
            <p className="text-2xl font-bold">{props.selectedPerk.name}</p>
            <p className="text-sm italic"> {props.selectedPerk.type}</p>
          </div>
          <div className=" row-start-2 text-center mb-6">
            <p className="text-2xl">{props.selectedPerk.cost}</p>
            <p className="text-sm italic">cost</p>
          </div>
          <div className=" row-start-4 flex justify-center mb-6">
            <div className='w-12'>
            <Icon
              type={props.selectedPerk.subType}
              include_name={true}
              theme="Black"
            />
            </div>
          </div>
        </div>
        {/* content */}
        <div className="w-full mr-2 row-start-1 col-start-2 col-span-3 flex">
          {/* Adjust size of this "textbox" */}
          {/* <p className="text ml-3   edgeDescript"></p> */}
          <textarea className='w-full h-96 resize-none mr-3' value={props.selectedPerk.description} readOnly></textarea>
        </div>
        {/* footer/buttons */}
        <div className="w-full ml-3 row-start-4 col-start-2 col-span-4 flex justify-center items-end">
          <button
            className="bg-red-500 text-gray-100 w-20 h-1/3 p-1 mr-2 rounded"
            onClick={props.ClickHandler}
          >
            close
          </button>
          <button className="bg-blue-500 text-gray-100 w-full mr-3 h-1/3  rounded" onClick={(e)=>{props.purchaseEdge(e,props.selectedPerk.cost)}}>
            Purchase?<span>-{props.selectedPerk.cost}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalView;
