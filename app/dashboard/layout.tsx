import MyDrawer from "@/components/ui/Drawer";
import { Box } from '@mui/material';

export default function Layout({children}: React.PropsWithChildren) {
    return (
        <Box sx={{ display: "flex" }}>
            <MyDrawer />
            {children}
        </Box>
    )
}