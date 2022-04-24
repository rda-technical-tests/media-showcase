import { createTheme, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { useState } from "react";
import MediaDetails from "./Components/MediaDetails/MediaDetails";
import MediaGrid from "./Components/MediaGrid/MediaGrid";
import IMedia from "./Models/IMedia";
import movieDBServiceMockup from "./Services/MovieDBService.Mockup";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const medias = movieDBServiceMockup.results;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<IMedia>();

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const handleMediaSelection = (media: IMedia) => {
    setSelectedMedia(media);
    handleOpen();
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        style={{ minHeight: '100vh' }}
      >
        <Grid item padding={5}>
          {medias && medias.length > 0 ?
            <MediaGrid medias={medias} onMediaSelection={handleMediaSelection} />
            : <p>No medias</p>
          }
        </Grid>
      </Grid>
      {selectedMedia ?
        <MediaDetails isOpen={isModalOpen} handleClose={handleClose} media={selectedMedia} />
        : <></>
      }
    </ThemeProvider>
  );
}

export default App