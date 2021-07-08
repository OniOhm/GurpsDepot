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
export type typeClick = {
    selectedPerk: perkBlock,
    ClickHandler : (e: React.MouseEvent) => void;
    purchaseEdge: (e: React.MouseEvent,cost: string) => void;
}
export type dataPoint = {
    Data: Array<perkBlock>,
    showNotFound: boolean,
    characterPoints: number,
    purchaseHandler: (e: React.MouseEvent, data: string) => void;
}
export type perkButton = {
    tiedPerk : perkBlock,
    toModal : (e: React.MouseEvent,data: perkBlock) => void;
}

// app state and reducer solution(deprecated till further notice)
export type state = {
    selectedPerk: perkBlock,
    modalShowHide: boolean,
}
export type Reducer<State,Action> = (state: State, action:Action) => State;