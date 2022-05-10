import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import { budgetLists, incomeLists, ownResourcesLists } from '../../constantDefinition/constantDefinition';

const PreviewScreen = ({ form }) => {
  const newObj = (
    Object.keys(form).reduce((accu, curr) => {
      const newLabel = form[curr].label;
      let newValue = [];

      if (curr === 'annualIncome' || curr === 'budget' || curr === 'ownResources') {
        // objから選択肢を表示する処理
        const arrayName = curr === 'annualIncome' ?
          incomeLists : curr === 'budget' ?
            budgetLists : ownResourcesLists;

        const keyList = Object.keys(arrayName)
        for (let index = 0; index < keyList.length; index++) {
          console.log('form[curr].value.max', form[curr].value.max);
          if (form[curr].value.max === arrayName[keyList[index]].max) {
            newValue = keyList[index] === '選択してください' ?
              newValue.concat('') : newValue.concat(keyList[index]);
            break;
          }
        }
        console.log('objのvalue::', newValue);
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

      } else if (curr === 'dateEntered' || curr === 'birthday') {
        // 日時の置換処理
        let newDate = form[curr].value.replace('-', '年');
        newDate = newDate.replace('-', '月');
        newDate = newDate.replace('T', '日 ');
        newDate = newDate.replace(':', '時');
        newDate = newDate.replace(':00Z', '分');
        newDate = newDate.indexOf('日') === -1 ? newDate + '日' : newDate;
        newValue = newValue.concat(newDate);

        accu = { ...accu, ...{ [curr]: { label: newLabel, value: newValue } } }
      } else {
        newValue = newValue.concat(form[curr].value);
        accu = { ...accu, ...{ [curr]: { label: newLabel, value: newValue } } }
      }
      return accu;
    }, {})
  )

  console.log('プレビュー中間地点', newObj);

  return (
    <Grid container spacing={2} key={'chk_main'}>
      <Grid item xs={12} md={12}
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - 16px)` },
          color: '#000000',
          fontSize: '20px',
          textAlign: 'center'
        }}
        key={`label_title`}
      >
        ご記入内容の確認
      </Grid>
      {Object.keys(newObj).map((item) => {
        /* console.log('item::', item); */
        return (
          <>
            <Grid item xs={5} md={4}
              sx={{
                flexGrow: 1,
                width: { sm: `calc(100% - 16px)` },
                color: '#666666',
                fontSize: '14px',
              }}
              key={`label_${item}`}
            >
              {form[item].label}
            </Grid>
            <Grid item xs={7} md={8}
              sx={{
                flexGrow: 1,
                width: { sm: `calc(100% - 16px)` },
                color: '#000000',
                fontSize: '16px',
              }}
              key={`content_${item}`}
            >
              {console.log('newObj[item].value ::', newObj[item].value)}
              {newObj[item].value.map((val, idx) => {
                if (idx > 0) {
                  return (
                    <>
                      <br />
                      {val}
                    </>
                  )
                } else {
                  return (val === '' ? ' ' : val);
                }
              })}
            </Grid>
          </>
        )
      })}
    </Grid>
  )
}

export default PreviewScreen;

PreviewScreen.propTypes = {
  form: PropTypes.object,
}