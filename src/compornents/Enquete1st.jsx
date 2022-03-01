/* eslint-disable max-len */
import PropTypes from 'prop-types';
import { useState } from 'react';
import format from 'date-fns/format';
import BasicInformation from './content/BasicInformation';
import Works from './content/Works';
import BackButton from './Button/BackButton';
import NextButton from './Button/NextButton';
import SubmitButton from './Button/SubmitButton';
import { Grid } from '@mui/material';

const Enquete1st = () => {
  const [form, setForm] = useState({
    fullname: { label: '名前', value: '', valueError: false, errorText: '入力エラー' },
    furigana: { label: 'フリガナ', value: '', valueError: false, errorText: '入力エラー' },
    dateEntered: { label: '記入日', value: format(new Date(), 'yyyy-MM-dd HH:mm'), valueError: false, errorText: '入力エラー' },
    birthday: { label: '誕生日', value: '', valueError: false, errorText: '入力エラー' },
    postCode: { label: '郵便番号', value: '', valueError: false, errorText: '数字で入力してください。入力例:442-0888' },
    address: { label: '住所', value: '', valueError: false, errorText: '入力エラー' },
    address2: { label: '住所(建物名)', value: '', valueError: false, errorText: '入力エラー' },
    tel: { label: 'TEL', value: '', valueError: false, errorText: '数字で入力してください。入力例:090-1111-2222' },
    mail: { label: 'MAIL', value: '', valueError: false, errorText: '英数字で入力してください。入力例:sample@mail.jp' },
    workPlace: { label: 'ご勤務先', value: '', valueError: false, errorText: '入力エラー' },
    holiday: { label: 'ご休日', value: '', valueError: false, errorText: '入力エラー' },
    works: { label: 'ご職業', value: '', valueError: false, errorText: '入力エラー' },
    annualIncome: { label: 'ご年収', value: { min: 0, max: 0 }, valueError: false, errorText: '入力エラー' },
    visitPurpose: { label: 'ご来場の目的', value: [], valueError: false, errorText: '入力エラー' },
    importantPoint: { label: '重要視するもの', value: '', valueError: false, errorText: '入力エラー' },
    currentHome: { label: '現在のお住まい', value: '', valueError: false, errorText: '入力エラー' },
    moveInNum: { label: '入居予定人数', value: '', valueError: false, errorText: '入力エラー' },
    moveInForm: { label: '入居形態', value: '', valueError: false, errorText: '入力エラー' },
    moveInSeason: { label: '入居希望時期', value: '', valueError: false, errorText: '入力エラー' },
    budget: { label: '建物予算', value: '', valueError: false, errorText: '入力エラー' },
    ownResources: { label: '自己資金', value: '', valueError: false, errorText: '入力エラー' },
    landExistence: { label: '土地の有無', value: '', valueError: false, errorText: '入力エラー' },
    siteBrowsing: { label: 'サイトの閲覧', value: '', valueError: false, errorText: '入力エラー' },
    documentRequest: { label: '資料請求', value: '', valueError: false, errorText: '入力エラー' },
    infomationSource: { label: '参照情報源', value: '', valueError: false, errorText: '入力エラー' },
    firstOpportunity: { label: '最初のきっかけ', value: '', valueError: false, errorText: '入力エラー' },
    bestOpportunity: { label: '一番のきっかけ', value: '', valueError: false, errorText: '入力エラー' },
  });
  const [pageNum, setPageNum] = useState(1);
  const nextVisible = !(pageNum === 6);
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
