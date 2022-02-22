import PropTypes from 'prop-types';
import NextButton from './Button/NextButton';
import BasicInformation from './content/BasicInformation';
import { useState } from 'react';
import BackButton from './Button/BackButton';
import Works from './content/Works';

const Enquete1st = () => {

  const [pageNum, setPageNum] = useState(1);
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

  const submitButtonClick = (event) => {
    event.preventDefault();
    console.log('submit!!!');
  }

  return (
    <form onSubmit={submitButtonClick}>
      <div className='flex flex-col items-center'>
        {pageNum === 1 && <BasicInformation />}
        {pageNum === 2 && <Works />}
        <div className='flex flex-row items-center'>
          {backVisible && <BackButton onClick={backButtonClick} />}
          {nextVisible && <NextButton onClick={nextButtonClick} />}
        </div>
        {!nextVisible && <button type='submit'>完了</button>}
      </div>
    </form>

  )
};

Enquete1st.propTypes = {
  event: PropTypes.object,
};

export default Enquete1st;