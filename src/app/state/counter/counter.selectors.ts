import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterState } from "./counter.state";

export const getState = createFeatureSelector<counterState>('counter');
export const getName =createSelector(getState, (state)=>{
    return state.name;
})
export const getCounter =createSelector(getState, (state)=>{
    return state.counter;
})