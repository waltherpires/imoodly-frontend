import Section from "@/components/ui/Section";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import ImageComponent from "../ui/ImageComponent";

import Transformation from "@/public/images/transformation.jpg";

export default function OurServices() {
  return (
    <Section bgcolor="#f9f9f9">
      <Grid container alignItems="center">
        <Grid size={{xs: 12, md: 6}}>
          <Grid container rowSpacing={1} columnSpacing={2} >
            <Grid size={12} justifySelf="center">
              <Typography variant="h4" color="primary.main">
                Transforme Seu Bem-Estar com o iMoodly
              </Typography>
            </Grid>
            <Grid size={12}>
              <Typography variant="h5">
                Uma plataforma inteligente para acompanhar suas emoções e
                melhorar sua saúde mental.
              </Typography>
            </Grid>
            <Grid size={{xs: 12, md: 6}}>
              <Card sx={{ height: {md: "240px"} }}>
                <CardContent>
                  <Typography variant="h6">
                    Autoconhecimento Facilitado
                  </Typography>
                  <Typography variant="body1">
                    Registre e acompanhe suas emoções para entender melhor seu
                    estado emocional ao longo do tempo.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{xs: 12, md: 6}}>
              <Card sx={{ height: {md: "240px"} }}>
                <CardContent>
                  <Typography variant="h6">Tecnologia a Seu Favor</Typography>
                  <Typography variant="body1">
                    Um ambiente intuitivo e seguro que combina inovação e
                    psicologia para promover seu bem-estar.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{xs: 12, md: 6}}>
              <Card sx={{ height: {md: "240px"} }}>
                <CardContent>
                  <Typography variant="h6">Apoio Contínuo</Typography>
                  <Typography variant="body1">
                    Acompanhe seu progresso com insights personalizados e
                    ferramentas projetadas para ajudar no seu crescimento
                    emocional.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{xs: 12, md: 6}}>
              <Card sx={{ height:{ md: "240px"}  }}>
                <CardContent>
                  <Typography variant="h6">Privacidade Garantida</Typography>
                  <Typography variant="body1">
                    Seus registros são protegidos com segurança avançada,
                    garantindo um espaço seguro para expressar suas emoções.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <ImageComponent size="md" image={Transformation} altDescription="varios fosforos em diferentes estados" />
      </Grid>
    </Section>
  );
}
