import replaced from "./replaced";

/**
 * BasicInfomationの入力時に、エラー判定を行う関数
 * @param {string} name : 入力中のinput名
 * @param {object} value : 入力値
 * @returns : エラー判定フラグ(Boolean値)
 */
const errorJudgement = (name, value) => {
  let isError = false;
  let chkValue;
  if (value === null) {
    chkValue = ''
  } else {
    chkValue = value.target ? replaced(value.target.value) : value ;
  }

  switch (name) {
    case 'postCode':
      let regexPC = /^([0-9]{3}-[0-9]{4}|[0-9]{3,7})$/;
      if (!regexPC.test(chkValue)) {
        console.log('ちがうよ!postCode', chkValue);
        isError = true;
      }
      break;
    case 'tel':
      let regexTel = /^(0[5-9]0-[0-9]{4}-[0-9]{4}|0[0-9]{1,4}-[0-9]{1,4}-[0-9]{4}|\d{10,11})$/;
      if (!chkValue.match(regexTel)) {
        console.log('ちがうよ!tel', chkValue);
        isError = true;
      }
      break;
    case 'mail':
      let regexMail = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
      if (!regexMail.test(chkValue)) {
        console.log('ちがうよ!tel', chkValue);
        isError = true;
      }
      break;
    default:
      isError = false;
      break;
  }

  return isError;
}

export default errorJudgement;