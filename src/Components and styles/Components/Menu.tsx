import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import {useTypedUseSelector} from "../../Redux/store";
import {useDispatch} from "react-redux";
import {showFavsAC} from "../../Redux/mainReducer";

export const Menu = () => {
    const dispatch = useDispatch()
    let showFavs = useTypedUseSelector(state => state.main.showFavs)

    let showFavsHandler = () => {
        dispatch(showFavsAC(!showFavs))
    }
    return (
        <div>
            <Box sx={{flexGrow: 1}}>

                <AppBar position="static">
                    <Toolbar sx={{background: "darkred"}}>

                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            Альфа банк | тестовое
                        </Typography>
                        <FormControlLabel
                            label={showFavs ? "все карточки" : "избранные"}
                            control={
                                <Switch
                                    color="warning"

                                    checked={showFavs}
                                    onChange={showFavsHandler}
                                    aria-label="switch"
                                />
                            }
                        />
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Menu;