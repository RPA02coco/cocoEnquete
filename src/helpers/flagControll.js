
export const disableChk = (form, chkNum) => {
  return Object.values(form).some(({ pageNum, valueError }) => pageNum === chkNum && valueError);
};

export const viewDisableChk = (form, chkNum) => {
  return Object.values(form).some(({ pageNum, nextClick }) => pageNum === chkNum && nextClick);
}