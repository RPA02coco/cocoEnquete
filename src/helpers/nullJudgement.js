import replaced from '../helpers/replaced';
import format from 'date-fns/format';

const nullJudge = (form, rawName, rawValue) => {
  let returnValue;
  if (rawValue === null) {
    returnValue = form[rawName].value;
  } else {
    if (rawValue.target) {
      returnValue = replaced(rawValue.target.value);
    } else {
      if (!isNaN(Date.parse(rawValue))) {
        returnValue = format(rawValue, 'yyyy-MM-dd');
      } else {
        returnValue = '';
      }
    }
  }
  return returnValue;
};

export default nullJudge;
