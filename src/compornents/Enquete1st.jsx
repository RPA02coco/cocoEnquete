import PropTypes from 'prop-types';
import NextButton from './Button/NextButton';
import BasicInformation from './content/BasicInformation';
import { useState } from 'react';
import BackButton from './Button/BackButton';
import Works from './content/Works';

const Enquete1st = () => {

  const [form, setForm] = useState({
    fullname: { label: '名前', value: '', valueError: false, errorText: '入力エラー' },
    furigana: { label: 'フリガナ', value: '', valueError: false, errorText: '入力エラー' },
    dateEntered: { label: '記入日', value: new Date(), valueError: false, errorText: '入力エラー' },
    birthday: { label: '誕生日', value: '', valueError: false, errorText: '入力エラー' },
    postCode: { label: '郵便番号', value: '', valueError: false, errorText: '数字で入力してください。入力例:442-0888' },
    address: { label: '住所', value: '', valueError: false, errorText: '入力エラー' },
    address2: { label: '住所(建物名)', value: '', valueError: false, errorText: '入力エラー' },
    tel: { label: 'TEL', value: '', valueError: false, errorText: '数字で入力してください。入力例:090-1111-2222' },
    mail: { label: 'MAIL', value: '', valueError: false, errorText: '英数字で入力してください。入力例:sample@mail.jp' },
    workPlace: { label: 'ご勤務先', value: '', valueError: false, errorText: '入力エラー' },
    holiday: { label: 'ご休日', value: '', valueError: false, errorText: '入力エラー' },
  });
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
        {pageNum === 1 && <BasicInformation form={form} setForm={setForm} />}
        {pageNum === 2 && <Works form={form} setForm={setForm} />}
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