
export const disableChk = (form, chkNum) => {
  return Object.values(form).some(({ pageNum, valueError }) => pageNum === chkNum && valueError);
};

export const disableID = (form, chkNum) => {
  let errName = '';
  const keylist = Object.keys(form);
  for (let i = 0; i < keylist.length; i++) {
    if (form[keylist[i]].pageNum === chkNum) {
      if (form[keylist[i]].valueError) {
        errName = keylist[i];
        break;
      }
    }
  }
  return errName;
}

/**
 * 次へのボタンを無効にはしないことになったため、コメントアウト
 * @param {*} form 
 * @param {*} chkNum 
 * @returns 
 */
export const viewDisableChk = (form, chkNum) => {
  return Object.values(form).some(({ pageNum, touch, valueError }) => pageNum === chkNum && touch && valueError);
}