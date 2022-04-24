import { Box, Grid, Modal, Rating, Stack, Typography } from "@mui/material"
import { useState } from "react";
import IMedia from "../../Models/IMedia";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface IMediaDetailsProps {
    isOpen: boolean;
    handleClose: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void) | undefined;
    media: IMedia;
}

const getFormatedDate = (date: string) => {
    let formatedDate = (new Date(date)).toLocaleDateString();
    return formatedDate;
}

function MediaDetails(props: IMediaDetailsProps) {
    const { isOpen, handleClose, media } = props;

    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Stack
                    direction="row"
                    spacing={2}
                >
                    <Stack
                        direction="column"
                        spacing={2}
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/w185/${props.media.poster_path}`}
                            width={185}
                        />
                    </Stack>
                    <Stack
                        direction="column"
                        spacing={2}
                    >
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {media.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="div">
                            {getFormatedDate(props.media.first_air_date)}
                        </Typography>
                        <Rating name="read-only" value={media.vote_average / 2} readOnly />
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {media.overview}
                        </Typography>
                    </Stack>
                </Stack>
            </Box>
        </Modal>
    )
}

export default MediaDetails