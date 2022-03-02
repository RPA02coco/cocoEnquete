import { annualIncomeLists, AIobjLists } from '../constantDefinition/constantDefinition';

export const setCheckcboxValue = (e, prev) => {
  const name = e.target.name;
  if (prev[name].value.includes(e.target.value)) {
    prev[name].value = prev[name].value.filter((item) => item !== (e.target.value));
  } else {
    prev[name].value = prev[name].value.concat(e.target.value);
  }

  return {
    ...prev,
    [name]: { ...prev[name], value: prev[name].value },
  };
}

export const setPulldownValue = (e, prev, name) => {
  prev[name].value = e.target.innerText;
  return {
    ...prev,
    [name]: { ...prev[name], value: prev[name].value },
  }
}

export const setPulldownObj = (e, prev) => {
  const name = 'annualIncome';
  const elementPosition = annualIncomeLists.indexOf(e.target.innerText);
  prev[name].value = AIobjLists[elementPosition];
  console.log('AIobjLists : ', AIobjLists);
  console.log('annualIncome value : ', prev[name].value);
  return {
    ...prev,
    [name]: { ...prev[name], value: prev[name].value },
  }
}