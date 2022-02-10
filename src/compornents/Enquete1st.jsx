import PropTypes from 'prop-types';
import NextButton from './NextButton';
import BasicInformation from './BasicInformation';
import './Enquete1st.css';

const Enquete1st = () => {
  
  const handleClick = (event) => {
    event.preventDefault();
    console.log('次のページに遷移させる');
  }

  return(
    <div className='Enquete1st'>
      <BasicInformation />
      <NextButton onClick={handleClick} />
    </div>
  )
};

Enquete1st.propTypes = {
  event: PropTypes.object,
};

export default Enquete1st;