import { Card, CardActionArea, CardActions, CardContent, IconButton, Typography } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

interface DiaryNoteInterface extends React.PropsWithChildren {
    title?: string,
    date: string,
}

export default function DiaryNote({children, title, date}: DiaryNoteInterface) {
    return (
        <Card sx={{ width: "100%", height: "100%"}}>
            <CardActionArea>
                <CardContent>
                    {title && <Typography variant="h5" component="div">{title}</Typography>}
                    <Typography variant="subtitle2">{date}</Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary", mt: 2}}>{children}</Typography>
                </CardContent>
                <CardActions>
                    <IconButton aria-label="editar">
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="remover">
                        <DeleteOutlineIcon />
                    </IconButton>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}