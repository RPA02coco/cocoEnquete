/* eslint-disable max-len */
import PropTypes from 'prop-types';
import { useState } from 'react';
import BasicInformation from './content/BasicInformation';
import Works from './content/Works';
import ImportantPoint from './content/ImportantPoint';
import BuildingAHouse from './content/BuildingAHouse';
import BuildingAHouse2 from './content/BuildingAHouse2';
import InformationGathering from './content/InformationGathering';
import BackButton from './Button/BackButton';
import NextButton from './Button/NextButton';
import SubmitButton from './Button/SubmitButton';
import { Grid } from '@mui/material';
import { formInit } from '../constantDefinition/formInit';

const Enquete1st = () => {
  const [form, setForm] = useState(formInit);
  const [pageNum, setPageNum] = useState(1);
  const nextVisible = !(pageNum === 7);
  const backVisible = !(pageNum === 1);

  const nextButtonClick = (event) => {
    event.preventDefault();
    setPageNum(pageNum + 1);
  };
  const backButtonClick = (event) => {
    event.preventDefault();
    setPageNum(pageNum - 1);
  };

  const submitButtonClick = (event) => {
    event.preventDefault();
    console.log('submit!!!');
  };

  return (
    <form onSubmit={submitButtonClick}>
      <Grid
        container spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={12}>
          {pageNum === 1 && <BasicInformation form={form} setForm={setForm} />}
          {pageNum === 2 && <Works form={form} setForm={setForm} />}
          {pageNum === 3 && <ImportantPoint form={form} setForm={setForm} />}
          {pageNum === 4 && <BuildingAHouse form={form} setForm={setForm} />}
          {pageNum === 5 && <BuildingAHouse2 form={form} setForm={setForm} />}
          {pageNum === 6 && <InformationGathering form={form} setForm={setForm} />}
        </Grid>
        <Grid item xs={4}>
          {backVisible && <BackButton onClick={backButtonClick} />}
        </Grid>
        <Grid item xs={4}>
          {nextVisible && <NextButton onClick={nextButtonClick} />}
          {!nextVisible && <SubmitButton onClick={nextButtonClick} />}
        </Grid>
      </Grid>
    </form >

  );
};

Enquete1st.propTypes = {
  event: PropTypes.object,
};

export default Enquete1st;
