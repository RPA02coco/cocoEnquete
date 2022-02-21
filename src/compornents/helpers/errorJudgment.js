/**
 * BasicInfomationの入力時に、エラー判定を行う関数
 * @param {string} name : 入力中のinput名
 * @param {object} value : 入力値
 * @returns : エラー判定フラグ(Boolean値)
 */
const errorJudgement = (name, value) => {
  let isError = false;
  switch (name) {
    case 'postCode':
      let regexPC = /^[0-9]{3}-[0-9]{4}|[0-9]{3,7}$/;
      if (!regexPC.test(value.target.value)) {
        console.log('ちがうよ!postCode', value.target.value);
        isError = true;
      }
      break;
    case 'tel':
      let regexTel = /^(0[5-9]0-[0-9]{4}-[0-9]{4}|0[0-9]{3}-[0-9]{2}-[0-9]{4}|\d{10,12})$/;
      if (!value.target.value.match(regexTel)) {
        console.log('ちがうよ!tel', value.target.value);
        isError = true;
      }
      break;
    case 'mail':
      let regexMail = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
      if (!regexMail.test(value.target.value)) {
        console.log('ちがうよ!tel', value.target.value);
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