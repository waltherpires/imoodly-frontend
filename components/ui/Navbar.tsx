import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
} from "@mui/material";


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: 'primary.main' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            iMoodly
          </Typography>
          <Button color="inherit">Registrar</Button>
          <Button
            variant="outlined"
            sx={{
            borderColor: "primary.main",
            backgroundColor: "#ffffff",
            color: "primary.main",
            }}
          >
            Entrar
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
