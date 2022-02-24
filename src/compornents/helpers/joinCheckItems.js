

const joinCheckItems = (form, rawName, rawValue) => {
  console.log('joinCheckItems chkDefined :', rawValue);

  let returnValue;
  if (rawValue === null) {
    returnValue = form[rawName].value;
  } else {
    if (rawValue.target) {
      // returnValue = replaced(rawValue.target.value);
    } else {
      if (!isNaN(Date.parse(rawValue))) {
        // returnValue = format(rawValue, 'yyyy-MM-dd HH:mm');
      } else {
        returnValue = '';
      }
    }
  }
  return returnValue;
}

export default joinCheckItems;