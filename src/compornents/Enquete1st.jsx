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
import InformationGathering2 from './content/informationGathering2';
import axios from 'axios';
import convertToJSON from '../helpers/convertToJSON';
import CompletionMessage from './content/CompletionMessage';

const disableChk = (form, chkNum) => {
  return Object.values(form).some(({ pageNum, valueError }) => pageNum === chkNum && valueError);
};

const Enquete1st = () => {
  const [form, setForm] = useState(formInit);
  const [pageCond, setPageCond] = useState({ pageNum: 1, disableFlg: false, });
  const nextVisible = !(pageCond.pageNum >= 7);
  const backVisible = !(pageCond.pageNum === 1 || pageCond.pageNum > 7);
  const submitVisible = (pageCond.pageNum === 7);
  const disableflg = disableChk(form, pageCond.pageNum);

  const nextButtonClick = (event) => {
    setPageCond((prev) => {
      return { ...prev, pageNum: prev.pageNum + 1 }
    });
  };
  const backButtonClick = (event) => {
    setPageCond((prev) => {
      return { ...prev, pageNum: prev.pageNum - 1 }
    });
  };

  const submitButtonClick = (event) => {
    event.preventDefault();
    console.log('submit!!!');
    console.log(form);

    // フォームをJSONに変換する
    const jsonForm = convertToJSON(form);
    console.log('JSON形式のform', jsonForm);

    //サーバへの送信処理
    axios.post('https://cocosumo.net/nodejs/cocoEnquete-API/', {
      // JSON形式に変換したフォームデータ
      jsonForm
    })
      .then(res => {
        console.log('axios', res);
      })
      .catch(res => {
        console.log(res);
      })

    setPageCond((prev) => {
      return { ...prev, pageNum: prev.pageNum + 1 }
    });
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
          {pageCond.pageNum === 1 && <BasicInformation form={form} setForm={setForm} />}
          {pageCond.pageNum === 2 && <Works form={form} setForm={setForm} />}
          {pageCond.pageNum === 3 && <ImportantPoint form={form} setForm={setForm} />}
          {pageCond.pageNum === 4 && <BuildingAHouse form={form} setForm={setForm} />}
          {pageCond.pageNum === 5 && <BuildingAHouse2 form={form} setForm={setForm} />}
          {pageCond.pageNum === 6 && <InformationGathering form={form} setForm={setForm} />}
          {pageCond.pageNum === 7 && <InformationGathering2 form={form} setForm={setForm} />}
          {pageCond.pageNum > 7 && <CompletionMessage />}
        </Grid>
        <Grid item xs={4}>
          {backVisible && <BackButton onClick={backButtonClick} disableflg={disableflg} />}
        </Grid>
        <Grid item xs={4}>
          {nextVisible && <NextButton onClick={nextButtonClick} disableflg={disableflg} />}
          {submitVisible && <SubmitButton />}
        </Grid>
      </Grid>
    </form >

  );
};

Enquete1st.propTypes = {
  event: PropTypes.object,
};

export default Enquete1st;
