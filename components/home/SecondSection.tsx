import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

import Beliefs from "@/public/images/goals.jpg";

export default function SecondSection() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "secondary.main",
        minHeight: "95vh",
        maxHeight: "1080px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 4,
        pt: 2,
        mt: { xs: 10 },
      }}
    >
      <Grid container spacing={{ sm: 4, md: 10}} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              width: "100%",
              maxWidth: "450px",
              mx: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={Beliefs}
              alt="Imagem de mulher meditando"
              layout="responsive"
              objectFit="cover"
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              maxWidth: "500px",
              mx: "auto",
            }}
          >
            <Typography variant="h3" sx={{ color: "white", textAlign: "center", pb: 2 }}>
              Nossos Ideais
            </Typography>
            <Typography variant="body1" sx={{ color: "white", textAlign: "start" }}>
              No coração do nosso projeto, o Sistema de Diário e Gestão
              Psicológica nasceu da necessidade de oferecer uma ferramenta
              acessível e eficaz para o cuidado da saúde mental. Sabemos que, em
              um mundo cada vez mais acelerado e exigente, é fundamental
              encontrar maneiras de monitorar e melhorar o bem-estar emocional.
              Nossa plataforma digital é projetada para ser um aliado na jornada
              de autoconhecimento e crescimento pessoal.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
