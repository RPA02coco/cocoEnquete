import PropTypes from 'prop-types';
// import {useEffect, useState} from 'react';
import styles from './Works.module.css';
import { Grid, Box, Checkbox } from '@mui/material';

const Works = ({ form, setForm }) => {
  // const [checkedItemsWorks, setCheckedItemsWorks] = useState([]);
  // const [checkedItemsNenshu, setCheckedItemsNenshu] = useState([]);
  const workLists = [
    '会社員', '会社役員', '契約社員', '公務員・団体職員', '経営者', '商工自営',
    '医師', '弁護士', '会計士・税理士', '弁理士', 'アルバイト・パート', '主婦・主夫',
    '学生', '無職', 'その他',
  ];
  const annualIncomeLists = [
    '～300万円', '～400万円', '～500万円', '～600万円', '～700万円', '～800万円',
    '～900万円', '～1,000万円', '～1,100万円', '～1,200万円', '～1,300万円', '～1,400万円',
    '～1,500万円', '～2,000万円', '～2,001万円', '収入無し',
  ];

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
    const name = e.target.name;

    setForm((prev) => {
      if (name === 'visitPurpose') {
        let chkList = prev[name].value;
        if (chkList.includes(e.target.value)) {
          chkList = chkList.filter((item) => item !== (e.target.value));
        } else {
          chkList = chkList.concat(e.target.value);
        }
        return {
          ...prev,
          [name]: { ...prev[name], value: chkList },
        };
      }
    });
  };
  console.log(form);

  return (
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
      <Grid item xs={12} md={12}>
        <Box component="main"
          sx={{
            flexGrow: 1
            , width: { sm: `calc(100% - 12px)` }
            , backgroundColor: '#cacaca'
          }}
        >
          ご職業:
        </Box>
      </Grid>
      {workLists.map((item, index) => {
        return (
          <Grid item xs={12} md={4} key={`key_works${item}`}>
            <CheckBox
              id={`id_works${index}`}
              value={item}
              name={'works'}
              checked={form.works.value.includes(item)}
              onChange={changeHandler}
            />
            <label htmlFor={`id_works${index}`}>
              {item}
            </label>
          </Grid>
        );
      })}
      <br />
      <Grid item xs={12} md={12}>
        <Box component="main"
          sx={{
            flexGrow: 1
            , width: { sm: `calc(100% - 12px)` }
            , backgroundColor: '#cacaca'
          }}
        >
          ご年収:
        </Box>
      </Grid>
      {annualIncomeLists.map((item, index) => {
        return (
          <Grid item xs={12} md={4} key={`key_annualIncome${item}`}>
            <CheckBox
              id={`id_annualIncome${index}`}
              value={item}
              name={'annualIncome'}
              checked={form.annualIncome.value.min.value}
              onChange={changeHandler}
            />
            <label htmlFor={`id_annualIncome${index}`}>
              {item}
            </label>
          </Grid>
        );
      })}
      <br />
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
      {visitPurposeLists.map((item, index) => {
        return (
          <Grid item xs={12} md={6} key={`key_visitPurpose${item}`}>
            <CheckBox
              id={`id_visitPurpose${index}`}
              value={item}
              name={'visitPurpose'}
              checked={form.visitPurpose.value.includes(item)}
              onChange={changeHandler}
            />
            <label htmlFor={`id_visitPurpose${index}`}>
              {item}
            </label>
          </Grid>
        );
      })}
    </Grid>
  );
};

Works.propTypes = {
  form: PropTypes.object,
  setForm: PropTypes.func,
};

export default Works;
