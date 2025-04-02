import { Box, Grid, Typography, Card, CardContent } from "@mui/material";

import Beliefs from "@/public/images/goals.jpg";
import ImageComponent from "../ImageComponent";

export default function SecondSection() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "secondary.main",
        minHeight: "95vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 4,
        py: 2,
        mt: { xs: 10 },
      }}
    >
      <Grid container spacing={{ xs: 2 }} alignItems="center">
        <Grid size={12}>
          <Box sx={{ p: 4 }}>
            <Typography
              variant="h3"
              sx={{
                color: "white",
                textAlign: "center",
                pb: 1,
                textShadow: "1px 1px 1px black",
              }}
            >
              iMoodly
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#f9f9f9",
                textAlign: "center",
                textShadow: "1px 1px 1px black",
              }}
            >
              Pensando sempre em entregar o melhor
            </Typography>
          </Box>
        </Grid>
        <ImageComponent image={Beliefs} altDescription="pessoa fazendoa anotações"/>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Grid
            container
            spacing={2}
            mx={{ xs: "auto", lg: "0px" }}
            justifyContent="center"
            sx={{ p: 2, maxWidth: "550px" }}
          >
            <Grid size={12}>
              <Card
                variant="outlined"
                sx={{
                  maxWidth: "500px",
                  bgcolor: "#f9f9f9"
                }}
              >
                <CardContent>
                  <Typography variant="body1" fontWeight="bold">
                    No coração do nosso projeto, o Sistema de Diário e Gestão
                    Psicológica nasceu da necessidade de oferecer uma ferramenta
                    acessível e eficaz para o cuidado da saúde mental. Sabemos
                    que, em um mundo cada vez mais acelerado e exigente, é
                    fundamental encontrar maneiras de monitorar e melhorar o
                    bem-estar emocional. Nossa plataforma digital é projetada
                    para ser um aliado na jornada de autoconhecimento e
                    crescimento pessoal.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={12}>
              <Card
                variant="outlined"
                sx={{
                  maxWidth: "500px",
                  bgcolor: "#f9f9f9"
                }}
              >
                <CardContent>
                  <Typography variant="body1" fontWeight="bold">
                    Acreditamos que a tecnologia pode ser uma aliada poderosa na
                    promoção do bem-estar. Por isso, desenvolvemos um ambiente
                    intuitivo e seguro, onde cada usuário pode registrar suas
                    emoções, acompanhar seu progresso e encontrar recursos
                    personalizados para o seu crescimento. Combinando ciência e
                    inovação, buscamos criar um espaço acolhedor que incentive o
                    autoconhecimento e a saúde mental de forma acessível e
                    eficaz.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
