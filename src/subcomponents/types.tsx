import React, { MouseEventHandler } from "react"

export type perkBlock = {
    name: string,
    description: string,
    // discriptor
    cost: string
    type: string, 
    subType: string,
    Difficulty ?: string,
}
export type typeCLick = {
    perkInfo: perkBlock,
    ClickHandler : (e: React.MouseEvent) => void;
}
export type dataPoint = {
    Data: Array<perkBlock>,
   
}