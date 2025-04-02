import DiaryContainer from "@/components/diary/DiaryContainer";
import { Typography, Box} from "@mui/material";

export default function Dashboard() {
  return (
    <Box component="main" sx={{mx: "30px", minHeight: "100vh"}}>
      <Typography variant="h1">Test</Typography>
      <DiaryContainer />
      <Box>
        <Typography variant="h5">Teste</Typography>
      </Box>
    </Box>
  );
}
