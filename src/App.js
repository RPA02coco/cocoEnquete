import { Container, Grid } from '@mui/material';
import Enquete1st from './compornents/Enquete1st';

const App = () => {
  return (
    <Container>
      <Grid
        container spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md>
          <img src={`${process.env.PUBLIC_URL}/cocoIcon.png`} alt="Logo" />
        </Grid>
        <Grid item xs={12} md={6}>
          <center><font size={5}>～お客様アンケート～</font></center>
        </Grid>        
        <Grid item md></Grid>
        <Grid item xs={12} md={12}>
          <Enquete1st />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
