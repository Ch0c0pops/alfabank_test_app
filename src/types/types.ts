export interface MainReducerStateType {
    items: Array<ItemType>
    showFavs: boolean
    favItems: Array<number>
    currentPage: number
    info: Info | null
    isLoading: boolean
}

interface Info {
    count?: number,
    pages: number,
    next?: string | null,
    prev?: string | null
}

export interface ItemType {
    id: number
    name: string
    image?: string
    status?: string
    species?: string
    type?: string
    gender?: string
    fav?: boolean
}

export enum actions {
    GET_ITEMS = "GET_ITEMS",
    SHOW_FAVS = "SHOW_FAVS",
    ADD_TO_FAVS = "ADD_TO_FAVS",
    GET_FAVS = "GET_FAVS",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    GET_FAV_ITEMS = "GET_FAV_ITEMS",
    SET_LOADING = "SET_LOADING"
}

export interface AddToFavsActionType {
    type: actions.ADD_TO_FAVS
    id: number
}

export interface SetLoadingActionType {
    type: actions.SET_LOADING
    isLoading: boolean
}

export interface GetFavItemsType {
    type: actions.GET_FAV_ITEMS
    data: Array<any>
}

export interface GetItemsActionType {
    type: actions.GET_ITEMS
    data: any
}

export interface ShowFavsActionType {
    type: actions.SHOW_FAVS
    showFavs: boolean
}

export interface GetFavsActionType {
    type: actions.GET_FAVS
}

export interface SetCurrentPageType {
    type: actions.SET_CURRENT_PAGE,
    page: number
}

export type ActionTypes = GetItemsActionType | ShowFavsActionType | AddToFavsActionType | GetFavsActionType |
    SetCurrentPageType | GetFavItemsType | SetLoadingActionType