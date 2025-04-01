"use client";

import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { purple, deepPurple } from '@mui/material/colors';
import { ReactNode } from 'react';

const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: deepPurple[400],
        },
    },
})

export default function ThemeRegistry({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}