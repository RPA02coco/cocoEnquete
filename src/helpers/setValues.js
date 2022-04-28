export const handleChangeCheckbox = (e, prev) => {
  const name = e.target.name;
  let returnValue;
  if (prev[name].value.includes(e.target.value)) {
    returnValue = prev[name].value.filter((item) => item !== (e.target.value));
  } else {
    returnValue = prev[name].value.concat(e.target.value);
  }
  return returnValue;
}

export const handleChangePulldwnStr = (e) => {
  return e.target.value === '選択してください' ? '' : e.target.value;
  /* prev[name].value = e.target.innerText;
  return {
    ...prev,
    [name]: { ...prev[name], value: prev[name].value },
  } */
}

export const handleChangePulldwnObj = (e, tgtArray) => {
  return tgtArray[e.target.value]
  /* prev[name].value = tgtArray[e.target.innerText];
  return {
    ...prev,
    [name]: { ...prev[name], value: prev[name].value },
  } */
}

export const handleChangeRadio = (e) => {
  return e.target.value;
}

export const handleChangeText = (e) => {
  return handleChangeRadio(e);
}