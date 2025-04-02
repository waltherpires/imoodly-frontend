import { Box, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";

import HomePageImage from '@/public/images/therapistchair.jpg';

export default function Hero() {
    return (
        <Box
        component="section"
        sx={{
          minHeight: "95vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 4,
          mt: {xs: 10, md: 20, lg: 5},
        }}>
        <Grid container spacing={{xs: 4, lg: 20}} alignItems="center">
          <Grid size={{ xs: 12, md:6 }}>
            <Box sx={{ maxWidth: "500px", mx: "auto" }}>
              <Typography variant="h2">
                Seu espaço seguro para {" "}
                <Box component="span" sx={{ color: "primary.main"}}>falar</Box>, {" "} 
                <Box component="span" sx={{ color: "primary.main"}}>sentir</Box>, {" "}
                e {" "}
                <Box component="span" sx={{ color: "primary.main", fontWeight: "bold"}}>evoluir</Box>.
              </Typography>
              <Typography variant="h5" sx={{ mt: 1 }}>
                Conecte-se com especialistas e cuide da sua saúde mental de qualquer lugar.
              </Typography>

              <Box sx={{mt: {xs: 2, md: 4} }}>
                <Button variant="contained" color="primary" sx={{ mr: 2}}>Criar Conta</Button>
                <Button variant="outlined" color="primary">Saiba Mais</Button>
              </Box>
            </Box>
          </Grid>

          <Grid size={{xs: 12, md: 6}}>
            <Box sx={{
              maxWidth: "450px",
              mx: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "2px 1px 4px black"
            }}>
              <Image src={HomePageImage} alt="Imagem de mulher meditando" layout="responsive" objectFit="cover"/>
            </Box>
          </Grid>
        </Grid>
      </Box>
    )
}