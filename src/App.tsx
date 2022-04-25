import { createTheme, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import MediaDetails from "./Components/MediaDetails/MediaDetails";
import MediaGrid from "./Components/MediaGrid/MediaGrid";
import IMedia from "./Models/IMedia";
import MovieDBService from "./Services/MovieDBService";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [medias, setMedias] = useState<Array<IMedia>>([]);
  const [selectedMedia, setSelectedMedia] = useState<IMedia>();


  let movieDBServiceInstance: MovieDBService;
  if (process.env.REACT_APP_API_KEY
    && process.env.REACT_APP_BASE_URL
    && process.env.REACT_APP_LANGUAGE
    && process.env.REACT_APP_TIMEZONE) {
    movieDBServiceInstance = new MovieDBService(
      process.env.REACT_APP_API_KEY,
      process.env.REACT_APP_BASE_URL,
      process.env.REACT_APP_LANGUAGE,
      process.env.REACT_APP_TIMEZONE
    );
  } else {
    throw new Error("Environement variables for API are not defined")
  }

  const getDiscoveriesAsync = async () => {
    try {
      const newMedias = await movieDBServiceInstance.GetDiscoveries(1);
      setMedias(newMedias);
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getDiscoveriesAsync();
  }, [])


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