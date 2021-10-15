import React, {useEffect} from 'react';
import styles from '../styles/itemsList.module.scss'
import {useTypedUseSelector} from "../../Redux/store";
import {getFavouriteItemsThunk, getFavsAC, getItemsThunk} from "../../Redux/mainReducer";
import {useDispatch} from "react-redux";
import Item from "./Item";
import {ItemType} from "../../types/types";

const ItemsList = () => {
    const items = useTypedUseSelector(state => state.main.items)
    const favItems = useTypedUseSelector(state => state.main.favItems)
    const showFavs = useTypedUseSelector(state => state.main.showFavs)
    const currentPage = useTypedUseSelector(state => state.main.currentPage)
    const dispatch = useDispatch()

    useEffect(() => {
        if (showFavs) {
            dispatch(getFavouriteItemsThunk())
        } else {
            dispatch(getItemsThunk(currentPage))
            if (localStorage.getItem('favs')) {
                dispatch(getFavsAC())
            }
        }
    }, [favItems.length, currentPage, showFavs, dispatch])

    if (showFavs && favItems.length === 0) {
        return (<div className={styles.itemsList}>
                <h1>Карточек пока нет</h1>
            </div>
        )
    }
    return (<div className={styles.itemsList}>
            {items.length > 1 ?
                    items.map((item: ItemType) => <Item {...item} key={item.id}/>) :
                    <Item {...items}/>}
        </div>
    )
};

export default ItemsList;