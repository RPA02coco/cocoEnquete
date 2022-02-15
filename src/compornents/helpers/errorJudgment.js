const errorJudgement = (name, value) => {
  let isError = false;
  switch (name) {
    case 'fullname':
      if (value.target.value.length > 5) {
        console.log('ちがうよ!fullname');
        isError = true;
      }
      break;
    case 'postCode':
      let regexPC = new RegExp(/^(0-9\-{0,8})$/);
      if (regexPC.test(value.target.value)) {
        console.log('ちがうよ!postCode', value.target.value);
        isError = true;
      }
      break;
    case 'tel':
      let regexTel = new RegExp(/^(0-9\-)$/);
      if (!regexTel.test(value.target.value)) {
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