import PropTypes from 'prop-types';
import NextButton from './NextButton';
import BasicInformation from './BasicInformation';

const Enquete1st = () => {
  
  const handleClick = (event) => {
    event.preventDefault();
    console.log('You clicked submit.');
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