import { Card, CardActionArea, CardActions, CardContent, IconButton, Typography } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

interface DiaryNoteInterface extends React.PropsWithChildren {
    title?: string,
    date: string,
}

export default function DiaryNote({children, title, date}: DiaryNoteInterface) {
    let text = typeof children === "string" ? children : "";
    
    if(text.length >  150){
        text = text.substring(0, 150) + "..."; 
    }

    return (
        <Card sx={{ display: "flex", flexDirection: "column", width: "100%", height: "100%"}}>
                <CardContent sx={{ flex: 1 }}>
                    {title && <Typography variant="h5" component="div">{title}</Typography>}
                    <Typography variant="subtitle2">{date}</Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary", mt: 2, pr: 1, wordBreak: "break-word", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "normal"}}>{text}</Typography>
                </CardContent>
                <CardActions sx={{display: "flex", justifyContent: "flex-end"}}>
                    <IconButton aria-label="editar">
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="remover">
                        <DeleteOutlineIcon />
                    </IconButton>
                </CardActions>
        </Card>
    )
}