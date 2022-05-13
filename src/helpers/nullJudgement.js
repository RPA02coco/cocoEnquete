import format from 'date-fns/format';

const nullJudge = (form, name, val) => {
  let returnValue;
  if (val === null) {
    returnValue = form[name].value;
  } else {
    if (val.target) {
      // 日付データ以外
      returnValue = val.target.value;
    } else {
      // 日付データ
      if (!isNaN(Date.parse(val))) {
        returnValue = format(val, 'yyyy-MM-dd');
      } else {
        returnValue = '';
      }
    }
  }
  return returnValue;
};

export default nullJudge;
