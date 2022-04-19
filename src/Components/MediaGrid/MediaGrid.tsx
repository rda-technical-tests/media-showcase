import { Grid } from "@mui/material";
import IMedia from "../../Models/IMedia";
import MediaCard from "../MediaCard/MediaCard";

interface IMediaGridProps {
    medias: Array<IMedia>;
}

function MediaGrid(props: IMediaGridProps) {
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
        >
            {
                props.medias.map(
                    media =>
                        <Grid
                            item
                            key={media.id}
                            xs={3}
                            >
                            <MediaCard media={media} />
                        </Grid>
                )
            }
        </Grid>

    )
}

export default MediaGrid