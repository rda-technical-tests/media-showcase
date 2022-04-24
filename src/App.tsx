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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);
  const medias = movieDBServiceMockup.results;

  const handleMediaSelection = (media: IMedia) => {
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
      <MediaDetails isOpen={isModalOpen} handleClose={handleClose} />
    </ThemeProvider>
  );
}

export default App