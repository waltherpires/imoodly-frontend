"use client";
import { useMediaQuery, useTheme, Grid, Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";

interface ImageComponentInterface {
  image: string | StaticImageData;
  altDescription: string;
}

export default function ImageComponent({
  image,
  altDescription,
}: ImageComponentInterface) {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  if (!isMdUp) return null;

  return (
    <Grid size={6}>
      <Box
        sx={{
          maxWidth: "450px",
          mx: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "2px 1px 4px black",
        }}
      >
        <Image
          src={image}
          alt={altDescription}
          layout="responsive"
          objectFit="cover"
        />
      </Box>
    </Grid>
  );
}
