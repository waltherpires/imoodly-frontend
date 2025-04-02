import Section from "@/components/ui/Section";
import { Grid, Typography } from "@mui/material";

import CardComponent from "../ui/CardComponent";
import ImageComponent from "../ui/ImageComponent";

import Transformation from "@/public/images/transformation.jpg";

export default function OurServices() {
  return (
    <Section bgcolor="#f9f9f9">
      <Grid container alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Grid container rowSpacing={1} columnSpacing={1}>
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
            <Grid size={{ xs: 12, sm: 6 }}>
              <CardComponent title="Autoconhecimento Facilitado">
                Registre e acompanhe suas emoções para entender melhor seu
                estado emocional ao longo do tempo.
              </CardComponent>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <CardComponent title="Tecnologia a Seu Favor">
                Um ambiente intuitivo e seguro que combina inovação e psicologia
                para promover seu bem-estar.
              </CardComponent>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <CardComponent title="Apoio Contínuo">
                Acompanhe seu progresso com insights personalizados e
                ferramentas projetadas para ajudar no seu crescimento emocional.
              </CardComponent>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <CardComponent title="Privacidade Garantida">
                Seus registros são protegidos com segurança avançada, garantindo
                um espaço seguro para expressar suas emoções.
              </CardComponent>
            </Grid>
          </Grid>
        </Grid>
        <ImageComponent
          size="md"
          image={Transformation}
          altDescription="varios fosforos em diferentes estados"
        />
      </Grid>
    </Section>
  );
}
