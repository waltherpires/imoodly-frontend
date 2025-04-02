import React from "react";
import { Box } from "@mui/material";

interface SectionInterface extends React.PropsWithChildren {
  bgcolor: string
}

export default function Section({ children, bgcolor }: SectionInterface) {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: bgcolor,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 4,
        py: { xs: 2, md: 5, lg: 2 },
      }}
    >
      {children}
    </Box>
  );
}
