import MyDrawer from "@/components/ui/Drawer";
import { Container, Box } from '@mui/material';

export default function Layout({children}: React.PropsWithChildren) {
    return (
        <Box sx={{ display: "flex" }}>
            <MyDrawer />
            <Container component="main">
            {children}
            </Container>
        </Box>
    )
}