import { createTheme, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import MediaGrid from "./Components/MediaGrid/MediaGrid";
import movieDBServiceMockup from "./Services/MovieDBService.Mockup";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const medias = movieDBServiceMockup.results;
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
            <MediaGrid medias={medias} />
            : <p>No medias</p>
          }
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
