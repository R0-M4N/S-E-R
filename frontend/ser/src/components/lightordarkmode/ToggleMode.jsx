import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useTheme} from '@mui/material/styles';
import {lightTheme, darkTheme, GlobalStyles} from "./theme"
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const StyledApp = styled.div``;

export default function ToggleColorMode() {
    const [theme, setTheme] = React.useState("light");
    
    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light")
    };
        
    return (
          <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <StyledApp>
                <IconButton sx={{ ml: 1 }} onClick={themeToggler} color="inherit">
                    {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </StyledApp>
          </ThemeProvider>
        )
    
}