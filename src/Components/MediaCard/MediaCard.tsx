import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import IMedia from "../../Models/IMedia"

interface IMediaCard {
    media: IMedia
}

function MediaCard(props: IMediaCard) {
    return (
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                sx={{ width: 154 }}
                component="img"
                image={`https://image.tmdb.org/t/p/w154/${props.media.poster_path}`}
                alt={props.media.name}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {props.media.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {props.media.first_air_date}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    )
}

export default MediaCard