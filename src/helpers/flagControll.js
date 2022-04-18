
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
        console.log('errName::', errName);
        break;
      }
    }
  }
  return errName;
}

export const viewDisableChk = (form, chkNum) => {
  return Object.values(form).some(({ pageNum, nextClick, valueError }) => pageNum === chkNum && nextClick && valueError);
}