import { Box, Grid } from "@mui/material";
import DiaryNote from "./DiaryNotePreview";

const diaryNotes = [
    {
        title: "Primeira Entrada",
        date: "2025-04-02",
        content: "Hoje foi um dia produtivo! Consegui avançar bastante no projeto."
    },
    {
        title: "Aprendendo React",
        date: "2025-04-01",
        content: "Estudei sobre hooks e como usá-los corretamente."
    },
    {
        title: "Aprendendo React",
        date: "2025-03-30",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas laboriosam excepturi odit, praesentium nisi veniam ut, enim magni id sed fuga? Enim saepe molestiae iure sapiente ab culpa? Dolore?"
    },
    {
        title: "Novo Desafio",
        date: "2025-03-28",
        content: "Comecei um novo projeto e estou empolgado para ver o resultado final."
    },
    {
        title: "Aprendendo React",
        date: "2025-03-30",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas laboriosam excepturi odit, praesentium nisi veniam ut, enim magni id sed fuga? Enim saepe molestiae iure sapiente ab culpa? Dolore?"
    },
    {
        title: "Novo Desafio",
        date: "2025-03-28",
        content: "Comecei um novo projeto e estou empolgado para ver o resultado final."
    }
];

export default function DiaryContainer() {
    return(
        <Box component="div" sx={{ display: "flex", justifyContent: "center", mt: 2, maxHeight: 400, maxWidth: {xs: 400, sm: 900}, overflow: "auto", bgcolor: "secondary.main", p: 2, boxShadow: "1px 1px 3px black", borderRadius: 4 }}>
            <Grid container spacing={2} justifyContent="center">
            {diaryNotes.map((note, index) => (
                <Grid key={index} size={{xs: 12, sm: 6}} sx={{width: {xs: 350, sm: 400}}}>
                    <DiaryNote key={index} title={note.title} date={note.date}>{note.content}</DiaryNote>
                </Grid>
            ))}
            </Grid>
        </Box>
    )
}