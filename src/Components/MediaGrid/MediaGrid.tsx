import { Grid } from "@mui/material";
import { cloneElement, isValidElement, ReactHTMLElement, ReactNode, useCallback, useEffect, useState } from "react";
import IMedia from "../../Models/IMedia";
import MediaCard from "../MediaCard/MediaCard";

interface IMediaGridProps {
    medias: Array<IMedia>;
    onMediaSelection?: (media: IMedia) => void
}

function MediaGrid(props: IMediaGridProps) {
    const [selectedMedia, setSelectedMedia] = useState<IMedia>();

    useEffect(
        () => {
            if (props.onMediaSelection !== undefined && selectedMedia !== undefined) {
                console.log(`New selected media : ${selectedMedia.id} - ${selectedMedia.name}`);
                props.onMediaSelection(selectedMedia)
            }
        }
        , [selectedMedia]
    );

    const onMediaClick = (media: IMedia) => {
        setSelectedMedia(media);
    };

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
                            xs={12}
                            sm={4}
                            md={3}
                            lg={2}
                        >
                            <MediaCard
                                onClick={() => onMediaClick(media)}
                                media={media}
                            />
                        </Grid>
                )
            }
        </Grid>
    )
}

export default MediaGrid