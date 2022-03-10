import { Container, Grid, CardMedia } from '@mui/material';
import Enquete1st from './compornents/Enquete1st';
import logo from './img/cocoIcon.png';
import axios from 'axios';

const App = () => {
axios.post('http://localhost:3001/cocoEnquete', {
  firstName: 'Fred',
  lastName: 'Fjkdhjksl',
})
.then(res => {
  console.log(res);
})

  return (
    <Container>
      <Grid
        container spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs md>
          <CardMedia
            component='img'
            src={logo}
          />
        </Grid>
        <Grid item xs={8} md={6}>
          <center><font size={4}>～お客様アンケート～</font></center>
        </Grid>
        <Grid item xs md></Grid>
        <Grid item xs={12} md={12}>
          <Enquete1st />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
