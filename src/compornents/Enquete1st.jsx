/* eslint-disable max-len */
import PropTypes from 'prop-types';
import { useState } from 'react';
import BasicInformation from './content/BasicInformation';
import Works from './content/Works';
import ImportantPoint from './content/ImportantPoint';
import BuildingAHouse from './content/BuildingAHouse';
import BuildingAHouse2 from './content/BuildingAHouse2';
import InformationGathering from './content/InformationGathering';
import SubmitButton from './Button/SubmitButton';
import { Grid } from '@mui/material';
import { formInit } from '../constantDefinition/formInit';
import InformationGathering2 from './content/informationGathering2';
import axios from 'axios';
import convertToJSON from '../helpers/convertToJSON';
import CompletionMessage from './content/CompletionMessage';
import BackNextButton from './Button/BackNextButton';
import { disableChk, disableID, viewDisableChk } from '../helpers/flagControll';
import PrivacyPolicy from './content/PrivacyPolicy';
import PreviewScreen from './content/PreviewScreen';

const Enquete1st = () => {
  const [form, setForm] = useState(formInit);
  const [pageCond, setPageCond] = useState({ pageNum: 0, disableFlg: false, });
  const totalPageNum = 8;
  const submitVisible = (pageCond.pageNum === totalPageNum);
  const disableflg = disableChk(form, pageCond.pageNum);
  const viewDisableflg = viewDisableChk(form, pageCond.pageNum);

  const nextButtonClick = (event) => {
    const plusNum = disableflg ? 0 : 1;
    touchFlg(form, pageCond.pageNum);
    if (disableflg) {
      // このページのエラーになっているフィールドを取得
      Object.keys(form).reduce((accu, curr) => {
        if (form[curr].pageNum === pageCond.pageNum && form[curr].valueError === true) {
          return accu.concat(curr);
        }
        return accu;
      }, []).forEach((item) => {
        // エラーのフィールドのclass名に'shakes'を追加
        document.querySelector(`[name="${item}"]`).closest('.MuiFormControl-root').classList.add('shakes');
        setTimeout(() => {
          // 1000ms後、エラーのフィールドのclass名から'shakes'を削除
          document.querySelector(`[name="${item}"]`).closest('.MuiFormControl-root').classList.remove('shakes')
        }, 1000)
      });

      document.getElementById(disableID(form, pageCond.pageNum)).scrollIntoView();
    }
    setPageCond((prev) => {
      return { ...prev, pageNum: prev.pageNum + plusNum }
    });
  };

  const backButtonClick = (event) => {
    setPageCond((prev) => {
      return { ...prev, pageNum: prev.pageNum - 1 }
    });
  };

  const touchFlg = (form, chkNum) => {
    setForm((prev) => {
      let newform = Object.keys(form).reduce((accu, curr) => {
        if (prev[curr].pageNum === chkNum) {
          return { ...accu, [curr]: { ...prev[curr], touch: true } };
        }
        return { ...accu, [curr]: prev[curr] };
      }, {})
      return newform;
    })
  }

  const submitButtonClick = (event) => {
    event.preventDefault();
    console.log('submit!!!');

    // フォームをJSONに変換する
    const jsonForm = convertToJSON(form);

    //サーバへの送信処理
    axios.post('https://cocosumo.net/nodejs/cocoEnquete-API/', {
      // JSON形式に変換したフォームデータ
      jsonForm
    })
      .then(res => console.log('axios', res))
      .catch(res => console.log('axios', res));

    setPageCond((prev) => {
      return { ...prev, pageNum: prev.pageNum + 1 }
    });
  };

  // console.log('form内容：', form);

  return (
    <form onSubmit={submitButtonClick}>
      <Grid
        container spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={12}>
          {pageCond.pageNum === 0 && <BasicInformation form={form} setForm={setForm} />}
          {pageCond.pageNum === 1 && <Works form={form} setForm={setForm} />}
          {pageCond.pageNum === 2 && <ImportantPoint form={form} setForm={setForm} />}
          {pageCond.pageNum === 3 && <BuildingAHouse form={form} setForm={setForm} />}
          {pageCond.pageNum === 4 && <BuildingAHouse2 form={form} setForm={setForm} />}
          {pageCond.pageNum === 5 && <InformationGathering form={form} setForm={setForm} />}
          {pageCond.pageNum === 6 && <InformationGathering2 form={form} setForm={setForm} />}
          {pageCond.pageNum === 7 && <PrivacyPolicy />}
          {pageCond.pageNum === 8 && <PreviewScreen form={form} />}
          {pageCond.pageNum > totalPageNum && <CompletionMessage />}
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          item xs={12} md={6}>
          {submitVisible && <PrivacyPolicy />}
          {submitVisible && <SubmitButton />}
        </Grid>
        <Grid item xs={12} md={12}>
          {(pageCond.pageNum < totalPageNum + 1) &&
            <BackNextButton
              handleNext={nextButtonClick}
              handleBack={backButtonClick}
              activeStep={pageCond.pageNum}
              disableflg={viewDisableflg}
              form={form}
              totalPageNum={totalPageNum}
            />}
        </Grid>
        <Grid item xs={12}>
          {/*  */}
        </Grid>
      </Grid>
    </form >

  );
};

Enquete1st.propTypes = {
  event: PropTypes.object,
};

export default Enquete1st;
