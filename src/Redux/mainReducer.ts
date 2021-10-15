import {actions, ActionTypes, ItemType, MainReducerStateType} from "../types/types";
import {Dispatch} from "redux";
import API from "../Axios/axios";

export const showFavsAC = (showFavs: boolean) => ({type: actions.SHOW_FAVS, showFavs})
export const getItemsAC = (data: any) => ({type: actions.GET_ITEMS, data})
export const addToFavsAC = (id: Array<number>) => ({type: actions.ADD_TO_FAVS, id})
export const getFavsAC = () => ({type: actions.GET_FAVS})
export const setCurrPageAC = (page: number) => ({type: actions.SET_CURRENT_PAGE, page})
export const getFavItemsAC = (data: Array<ItemType>) => ({type: actions.GET_FAV_ITEMS, data})
export const setLoadingAC = (isLoading: boolean) => ({type: actions.SET_LOADING, isLoading})

export const getItemsThunk = (currentPage: number) => async (dispatch: Dispatch) => {
    try {
        dispatch(setLoadingAC(true))
        dispatch(showFavsAC(false))
        let response = await API.getItems(currentPage)
        if (response !== null) {
            dispatch(getItemsAC(response.data))

        }
    } catch (e) {
        alert(e)
    } finally {
        dispatch(setLoadingAC(false))
    }
}

export const getFavouriteItemsThunk = () => async (dispatch: Dispatch) => {
    try {
        dispatch(setLoadingAC(true))
        let favouriteItems = localStorage.getItem("favs")
        if (favouriteItems != null) {
            let response = await API.getFavouriteItems(JSON.parse(favouriteItems))
            dispatch(getFavItemsAC(response.data))
        }
    } catch (e) {
        alert(e)
    } finally {
        dispatch(setLoadingAC(false))
    }
}

const initialState: MainReducerStateType = {
    items: [],
    favItems: [],
    showFavs: false,
    currentPage: 1,
    info: null,
    isLoading: false
}

export const mainReducer = (state = initialState, action: ActionTypes) => {

    switch (action.type) {

        case actions.GET_ITEMS:
            return {...state, items: action.data.results, info: action.data.info}
        case actions.GET_FAV_ITEMS:
            return {...state, items: action.data}
        case actions.SHOW_FAVS:
            return {...state, showFavs: action.showFavs}
        case actions.ADD_TO_FAVS:
            return {...state, favItems: action.id}
        case actions.GET_FAVS:
            // @ts-ignore
            return {...state, favItems: JSON.parse(localStorage.getItem('favs'))}
        case actions.SET_CURRENT_PAGE:
            return {...state, currentPage: action.page}
        case actions.SET_LOADING:
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}