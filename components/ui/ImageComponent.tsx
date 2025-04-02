"use client";
import { useMediaQuery, useTheme, Grid, Box, Breakpoint } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import  { useWindowSize }  from '@/hooks/useWindowSize';

interface ImageComponentInterface {
  image: string | StaticImageData;
  size: Breakpoint,
  altDescription: string;

}

export default function ImageComponent({
  image,
  altDescription,
  size
}: ImageComponentInterface) {
  const theme = useTheme();
  const isUp = useMediaQuery(theme.breakpoints.up(size));

  const { width } = useWindowSize();
  const imageSize = width >= 1200 ? "450px" : width >= 768? "350px" : "250px";
  
  if (!isUp) return null;

  if(size === "lg") {
    return (
      <Grid size={6}>
      <Box
        sx={{
          maxWidth: imageSize,
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
    )
  }

  if(size === "md") {
    return (
      <Grid size={6}>
      <Box
        sx={{
          mt: "5px",
          maxWidth: imageSize,
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
    )
  }

}
