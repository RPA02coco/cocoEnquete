import {Container} from '@mui/material';
import Enquete1st from './compornents/Enquete1st';

const App = () => {
  return (
    <Container className="container mx-auto px-6">
      <div className='flex flex-col flex justify-center'>
        <div className='flex flex-row space-x-4 flex justify-center p-2'>
          <img src={`${process.env.PUBLIC_URL}/cocoIcon.png`} alt="Logo" />
          <h1 className='text-2xl underline'>～お客様アンケート～</h1>
        </div>
        <Enquete1st />
      </div>
    </Container>
  );
};

export default App;
