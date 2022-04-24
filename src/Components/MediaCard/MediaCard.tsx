import { Box, Card, CardActionArea, CardContent, CardMedia, CardProps, Typography } from "@mui/material"
import { useState } from "react";
import IMedia from "../../Models/IMedia"

interface IMediaCard extends CardProps {
    media: IMedia
}

const getFormatedDate = (date: string) => {
    let formatedDate = (new Date(date)).toLocaleDateString();
    return formatedDate;
}

function MediaCard(props: IMediaCard) {
    const { media, ...other } = props;
    return (
        <Card
            {...other}>
            <CardActionArea
                sx={{ display: 'flex', justifyContent: "flex-start" }}
            >
                <CardMedia
                    sx={{ width: 92, height: 138 }}
                    component="img"
                    image={`https://image.tmdb.org/t/p/w92/${props.media.poster_path}`}
                    alt={props.media.name}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="body1">
                            {props.media.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="div">
                            {getFormatedDate(props.media.first_air_date)}
                        </Typography>
                    </CardContent>
                </Box>
            </CardActionArea>
        </Card>
    )
}

export default MediaCard