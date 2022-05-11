import { budgetLists, incomeLists, ownResourcesLists } from '../constantDefinition/constantDefinition';

const makePreviewScreenObj = (form) => {
  const newObj = Object.keys(form).reduce((accu, curr) => {
    const newLabel = form[curr].label;
    let newValue = [];

    if (curr === 'annualIncome' || curr === 'budget' || curr === 'ownResources') {
      // objから選択肢を表示する処理
      const arrayName = curr === 'annualIncome' ?
        incomeLists : curr === 'budget' ?
          budgetLists : ownResourcesLists;

      const keyList = Object.keys(arrayName)
      for (let index = 0; index < keyList.length; index++) {
        // console.log('form[curr].value.max', form[curr].value.max);
        if (form[curr].value.max === arrayName[keyList[index]].max) {
          newValue = keyList[index] === '選択してください' ?
            newValue.concat('') : newValue.concat(keyList[index]);
          break;
        }
      }
      // console.log('objのvalue::', newValue);
      accu = { ...accu, ...{ [curr]: { label: newLabel, value: newValue } } }

    } else if (
      curr === 'vstPrpsOthers'
      || curr === 'impPointOthers'
      || curr === 'rentPrice'
      || curr === 'mvInFormOthers'
      || curr === 'yumePersonInCharge'
      || curr === 'introducer'
    ) {
      // その他の詳細な内容を表示するかどうかを判断する
      let keyName = '';
      let searchName = '';
      let unit = '';
      if (curr === 'vstPrpsOthers') {
        keyName = 'visitPurpose';
        searchName = 'その他';
      } else if (curr === 'impPointOthers') {
        keyName = 'importantPoint';
        searchName = 'その他';
      } else if (curr === 'rentPrice') {
        keyName = 'currentHome';
        searchName = '賃貸';
        unit = ' 万円/月';
      } else if (curr === 'mvInFormOthers') {
        keyName = 'moveInForm';
        searchName = 'その他';
      } else if (curr === 'yumePersonInCharge') {
        keyName = 'informationSource';
        searchName = '9.ハウスドゥ！(夢のおてつだい)からのご紹介';
      } else if (curr === 'introducer') {
        keyName = 'informationSource';
        searchName = '10.知人・ご友人からのご紹介';
        unit = ' 様';
      }

      // console.log('keyName= ', keyName, '::', form[keyName], '　確認中');
      if (form[keyName].value.includes(searchName)) {
        // console.log(keyName, '　にて、対象処理を検出');
        unit = form[curr].value === '' ? '' : unit;
        newValue = newValue.concat(form[curr].value + unit);
        accu = { ...accu, ...{ [curr]: { label: newLabel, value: newValue } } }
      }

    } else if (curr === 'visitPurpose' || curr === 'importantPoint' || curr === 'informationSource') {
      // formに配列で保存されている項目の処置
      const addVal = form[curr].value.length === 0 ? '' : form[curr].value;
      newValue = newValue.concat(addVal);
      accu = { ...accu, ...{ [curr]: { label: newLabel, value: newValue } } }
    } else if (curr === 'dateEntered' || curr === 'birthday') {
      // 日時の置換処理
      let newDate = form[curr].value.replace('-', '年');
      newDate = newDate.replace('-', '月');
      newDate = newDate.replace('T', '日 ');
      newDate = newDate.replace(':', '時');
      newDate = newDate.replace(':00Z', '分');
      newDate = newDate.indexOf('日') === -1 ? newDate + '日' : newDate;
      newValue = newValue.concat(newDate);

      accu = (curr === 'birthday') ? { ...accu, ...{ [curr]: { label: newLabel, value: newValue } } }
        : { ...accu };
    } else if (curr === 'areaOfLand') {
      newValue = form[curr].value === '' ? newValue.concat('') : newValue.concat(form[curr].value + ' 坪');
      accu = { ...accu, ...{ [curr]: { label: newLabel, value: newValue } } }
    } else {
      newValue = newValue.concat(form[curr].value);
      accu = { ...accu, ...{ [curr]: { label: newLabel, value: newValue } } }
    }
    return accu;
  }, {})

  return newObj;
}

export default makePreviewScreenObj;