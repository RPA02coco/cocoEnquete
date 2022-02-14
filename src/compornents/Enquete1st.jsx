import PropTypes from 'prop-types';
import NextButton from './Button/NextButton';
import BasicInformation from './content/BasicInformation';
import {useState} from 'react';
import './Enquete1st.css';
import BackButton from './Button/BackButton';
import Works from './content/Works';

const Enquete1st = () => {
  
  const  [pageNum, setPageNum] = useState(1);
  const nextVisible = !(pageNum === 6);
  const backVisible = !(pageNum === 1);
  
  const nextButtonClick = (event) => {
    event.preventDefault();
    setPageNum(pageNum + 1);
  }
  const backButtonClick = (event) => {
    event.preventDefault();
    setPageNum(pageNum - 1); 
  }
  
  return(
    <>
      <div className='Enquete1st'>
        {backVisible && <BackButton onClick={backButtonClick}/>}
        {pageNum === 1 && <BasicInformation />}
        {pageNum === 2 && <Works />}
        {nextVisible && <NextButton onClick={nextButtonClick} />}
      </div>
    </>
  )
};

Enquete1st.propTypes = {
  event: PropTypes.object,
};

export default Enquete1st;