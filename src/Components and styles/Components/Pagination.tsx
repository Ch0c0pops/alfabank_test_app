import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useDispatch} from "react-redux";
import {useTypedUseSelector} from "../../Redux/store";
import styles from '../styles/pagination.module.scss';
import {setCurrPageAC} from "../../Redux/mainReducer";

export default function PaginationPage() {
    const dispatch = useDispatch()
    const currentPage = useTypedUseSelector(state => state.main.currentPage)
    const info = useTypedUseSelector(state => state.main.info)

    const clickHandler = (target: any) => {

        let num = Number(target.innerText)

        if (target && target.dataset.testid === "LastPageIcon") {
            num = info!.pages
        }
        if (target && target.dataset.testid === "FirstPageIcon") {
            num = 1
        }
        if (target && target.dataset.testid === "NavigateNextIcon") {
            num = currentPage + 1
        }
        if (target && target.dataset.testid === "NavigateBeforeIcon") {
            num = currentPage - 1
        }
        dispatch(setCurrPageAC(num))
    }

    return (
        <div className={styles.pagination}>
            <Stack spacing={2} sx={{mx: "auto", width: 450}}>
                <Pagination count={info?.pages || 10} color={"standard"} variant="outlined" shape="rounded"
                            showFirstButton showLastButton
                            onClick={(event) => {
                                const btn = event.target as HTMLElement
                                clickHandler(btn)
                            }}/>
            </Stack>
        </div>
    );
}
