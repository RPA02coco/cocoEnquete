import PropTypes from 'prop-types';
import { Grid, Box, Checkbox, FormControlLabel, Autocomplete, TextField } from '@mui/material';

const Works = ({ form, setForm }) => {
  const workLists = [
    '会社員', '会社役員', '契約社員', '公務員・団体職員', '経営者', '商工自営',
    '医師', '弁護士', '会計士・税理士', '弁理士', 'アルバイト・パート', '主婦・主夫',
    '学生', '無職', 'その他',
  ];
  const annualIncomeLists = [
    '～300万円', '～400万円', '～500万円', '～600万円', '～700万円', '～800万円',
    '～900万円', '～1,000万円', '～1,100万円', '～1,200万円', '～1,300万円', '～1,400万円',
    '～1,500万円', '～2,000万円', '2,001万円～', '収入無し',
  ];
  const AIobjLists = {
    min: ['1', '301', '401', '501', '601', '701', '801', '901', '1001', '1101', '1201', '1301', '1401', '1501', '2001', '0'],
    max: ['300', '400', '500', '600', '700', '800', '900', '1000', '1100', '1200', '1300', '1400', '1500', '2000', '2001', '0', '']
  }

  const visitPurposeLists = [
    '家づくりの進め方について知りたい',
    '予算の組み方について知りたい',
    '土地探しについて知りたい',
    '当社の家づくりについて知りたい',
    '当社で具体的に家づくりを検討したい',
    '現在の住まいのことで相談したい',
    'まずはモデルハウスなどを見たい',
    'その他'
  ];

  const changeHandler = (e) => {
    console.log('setform-name', e);    
    let name = '';
    setForm((prev) => {
      if (e.target.name) {        
        console.log('chk1');
        name = e.target.name;
        if (prev[name].value.includes(e.target.value)) {
          prev[name].value = prev[name].value.filter((item) => item !== (e.target.value));
        } else {
          prev[name].value = prev[name].value.concat(e.target.value);
        }
        return {
          ...prev,
          [name]: { ...prev[name], value: prev[name].value },
        };
      } else if (e.target.id) {
        console.log('chk2');
        if (e.target.id.includes('works')) {
          name = 'works';
          prev[name].value = e.target.value;
          return {
            ...prev,
            [name]: { ...prev[name], value: prev[name].value },
          }
        } else if (e.target.id.includes('annualIncome')) {
          name = 'works';
          prev[name].value = e.target.value;
        }
      }
    });
  };
  console.log(form);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Box component="main"
            sx={{
              flexGrow: 1
              , width: { sm: `calc(100% - 12px)` }
              , backgroundColor: '#9acd32'
            }}
          >
            ◆世帯主様について教えてください
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            disablePortal
            size='small'
            id="works"
            onChange={changeHandler}
            options={workLists}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="ご職業" name="works" />}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            disablePortal
            size='small'
            id="annualIncome"
            onChange={changeHandler}
            options={annualIncomeLists}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="ご年収" />}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Box component="main"
            sx={{
              flexGrow: 1
              , width: { sm: `calc(100% - 12px)` }
              , backgroundColor: '#9acd32'
            }}
          >
            本日、当社にご来場いただいた目的は何ですか？※複数回答可
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        {visitPurposeLists.map((item, index) => {
          return (
            <Grid item xs={12} md={6} key={`key_visitPurpose${item}`}>
              <FormControlLabel control={
                <Checkbox
                  id={`id_visitPurpose${index}`}
                  value={item}
                  name={'visitPurpose'}
                  checked={form.visitPurpose.value.includes(item)}
                  onChange={changeHandler}
                />}
                label={item} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

Works.propTypes = {
  form: PropTypes.object,
  setForm: PropTypes.func,
};

export default Works;
