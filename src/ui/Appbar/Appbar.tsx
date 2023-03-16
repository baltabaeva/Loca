import {Box, IconButton, useTheme} from "@mui/material";
import {useContext} from "react";
import InputBase from "@mui/material/InputBase";
import {ColorModeContext, tokens} from "../Theme/theme";
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from "@mui/icons-material/Search";


const Appbar = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" justifyContent="space-between" p={6} >
            <Box display={"flex"} bgcolor={colors.primary[400]} borderRadius="3px" >
                <InputBase sx={{ml: 2, flex: 1}} placeholder="Search"/>
                <IconButton type="button" sx={{p: 1}}>
                    <SearchIcon/>
                </IconButton>
            </Box>
            <Box display="flex" justifyContent="flex-end">
                <IconButton onClick={colorMode.toggleColorMode} >
                    {theme.palette.mode === "dark" ? (
                        <ModeNightIcon/>
                    ) : (
                        <LightModeIcon/>
                    )}
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <IconButton>
                    <SettingsIcon/>
                </IconButton>
                <IconButton>
                    <PersonIcon/>
                </IconButton>
            </Box>
        </Box>
    );
};

export default Appbar;

