import './App.css';
import Enquete1st from './compornents/Enquete1st';

const App = () => {
  return(
    <div className='md:container md:mx-32'>
      <h1 className='text-2xl underline'>ここすもハウス お客様アンケート</h1>
      <Enquete1st />
    </div>
  );
}

export default App;
