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
export type icon = {
    type: string,
    include_name: boolean,
    theme: string
}
export type typeCLick = {
    selectedPerk: perkBlock,
    ClickHandler : (e: React.MouseEvent) => void;
}
export type dataPoint = {
    Data: Array<perkBlock>,
}
export type perkButton = {
    tiedPerk : perkBlock,
    toModal : (e: React.MouseEvent,data: perkBlock) => void;
}
export type action = {
    type: String,
}
export type state = {
    selectedPerk: perkBlock,
    modalShowHide: boolean
}
export type Reducer<State,Action> = (state: State, action:Action) => State;