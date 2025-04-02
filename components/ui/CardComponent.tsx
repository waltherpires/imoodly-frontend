import { Card, CardContent, Typography, Box } from "@mui/material"
import CheckIcon from '@mui/icons-material/Check';

interface CardComponentInterface extends React.PropsWithChildren {
    title: string
}

export default function CardComponent({title, children}: CardComponentInterface) {
    return (
        <Card sx={{ minHeight: {md: "208px"}, height: "100%", maxWidth: "300px", flexGrow: 1, mx: {xs: "auto", md: null}}}>
        <CardContent>
          <Typography variant="h6" sx={{display: "flex", alignItems: "center", gap: 1}}>
            <Box sx={{display: "inline-flex", bgcolor: "primary.main", alignItems: "center", justifyContent: "center", borderRadius: "5px", height: "25px", my: 0 }}><CheckIcon sx={{color: "white"}}/></Box>{title}
          </Typography>
          <Typography variant="body1" sx={{mt: 1, textAlign: "left", textAlignLast: "left", hyphens: "auto", wordBreak: "break-word"}} component="p">
            {children}
          </Typography>
        </CardContent>
      </Card>
    )
}