/* eslint-disable max-len */
import replaced from './replaced';

/**
 * 引数(chkVal)が空かどうか判定する処理：必須入力項目用
 * @param {string} chkVal : ブランクチェックする対象の値
 * @return {boolean} :エラー判定フラグ(true=エラー, false=notエラー)
 */
const blankCheck = (chkVal) => {
  return chkVal === '' ? true : false;
}

/**
 * BasicInfomationの入力時に、エラー判定を行う関数
 * @param {string} name : 入力中のinput名
 * @param {object} value : 入力値
 * @return {boolean}: エラー判定フラグ
 */
const errorJudgement = (name, value) => {
  let isError = false;
  let chkValue;
  if (value === null) {
    chkValue = '';
  } else {
    chkValue = value.target ? replaced(value.target.value) : value;
  }

  switch (name) {
    case 'fullname':
    case 'furigana':
    case 'birthday':
    case 'address':
      isError = blankCheck(chkValue);
      break;
    
    case 'postCode':
      const regexPC = /^([0-9]{3}-[0-9]{4}|[0-9]{3,7})$/;
      if (!regexPC.test(chkValue)) {
        console.log('ちがうよ!postCode', chkValue);
        isError = true;
      }
      isError = isError || blankCheck(chkValue);
      break;
    case 'tel':
      const regexTel = /^(0[5-9]0-[0-9]{4}-[0-9]{4}|0[0-9]{1,4}-[0-9]{1,4}-[0-9]{4}|\d{10,11})$/;
      if (!chkValue.match(regexTel)) {
        console.log('ちがうよ!tel', chkValue);
        isError = true;
      }
      isError = isError || blankCheck(chkValue);
      break;
    case 'mail':
      const regexMail = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
      if (!regexMail.test(chkValue)) {
        console.log('ちがうよ!tel', chkValue);
        isError = true;
      }
      isError = isError || blankCheck(chkValue);
      break;
    default:
      isError = false;
      break;
  }

  return isError;
};

export default errorJudgement;
