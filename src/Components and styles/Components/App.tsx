import React from 'react';
import '../styles/App.css';
import Menu from "./Menu";
import {useTypedUseSelector} from "../../Redux/store";
import ItemsList from "./ItemsList";
import {Container} from "@mui/material";
import PaginationPage from "./Pagination";
import Loader from "./Loader";

function App() {
    const showFavs = useTypedUseSelector(state => state.main.showFavs)
    const isLoading = useTypedUseSelector(state => state.main.isLoading)

    return (
        <Container maxWidth="xl">
            <Menu/>
            {!showFavs && <PaginationPage/>}
            {isLoading && <Loader/>}
            <ItemsList/>
        </Container>
    );
}

export default App;
