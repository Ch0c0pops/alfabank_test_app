import * as React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import {ItemType} from "../../types/types";
import {useDispatch} from "react-redux";
import {addToFavsAC} from "../../Redux/mainReducer";
import {useTypedUseSelector} from "../../Redux/store";
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

const Item = (props: ItemType) => {
    const dispatch = useDispatch()
    const favItems: Array<number> = useTypedUseSelector(state => state.main.favItems)

    let addToFavsHandler = (id: number) => {
        let favs = localStorage.getItem('favs')
        if (favs) {
            let parsedFavs = JSON.parse(favs)
            parsedFavs.push(id)
            localStorage.setItem('favs', JSON.stringify(parsedFavs))
            dispatch(addToFavsAC(parsedFavs))
        } else {
            let arr = [id]
            localStorage.setItem('favs', JSON.stringify(arr))
            dispatch(addToFavsAC(arr))
        }
    }
    let removeFromFavsHandler = (id: number) => {
        let favs = localStorage.getItem('favs')
        if (favs) {
            let parsedFavs = JSON.parse(favs)
            let filteredFavs = parsedFavs.filter((f: number) => f !== id)
            localStorage.setItem('favs', JSON.stringify(filteredFavs))
            dispatch(addToFavsAC(filteredFavs))
        }
    }

    return (
        <ImageListItem key={props.image}>
            <img
                src={`${props.image}?w=248&fit=crop&auto=format`}
                srcSet={`${props.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={`img${props.id}`}
                loading="lazy"
            />

            <ImageListItemBar
                title={props.name}
                subtitle={`${props.gender} / ${props.species} / ${props.status} `}
                actionIcon={
                    {
                        ...favItems.includes(props.id) ?
                            <FavoriteRoundedIcon sx={{color: 'red'}} fontSize="large"
                                                 onClick={(event) => removeFromFavsHandler(props.id)}/> :
                            <FavoriteRoundedIcon color='disabled' fontSize="large"
                                                 onClick={(event) => addToFavsHandler(props.id)}/>
                    }
                }
            />
        </ImageListItem>
    );
}

export default Item;