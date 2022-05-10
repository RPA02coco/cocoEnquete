import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import format from 'date-fns/format';

const PreviewScreen = ({ form }) => {
  const newObj = (
    Object.keys(form).reduce((accu, curr) => {
      let newLabel = form[curr].label;
      let newValue = [];
      if (curr === 'annualIncome' || curr === 'budget' || curr === 'ownResources') {
        // objから選択肢を表示する処理
        newLabel = form[curr].label;
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
        newValue = newValue.concat(newDate);

        const addObj = { [curr]: { label: newLabel, value: newValue } }
        accu = { ...accu, ...addObj }
      } else {
        newLabel = form[curr].label;
        newValue = newValue.concat(form[curr].value);
        const addObj = { [curr]: { label: newLabel, value: newValue } }
        accu = { ...accu, ...addObj }
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
              {newObj[item].value.map((val) => {
                return val === '' ? '記入無し' : val;
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