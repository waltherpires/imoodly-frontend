"use client";

import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { purple, deepPurple } from '@mui/material/colors';
import { ReactNode } from 'react';

const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
            dark: "#9500ae",
            light: "#dd33fa"
        },
        secondary: {
            main: deepPurple[400],
            dark: "#4615b2",
            light: "#834bff",
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