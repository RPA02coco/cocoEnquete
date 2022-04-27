import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import errorJudgement from '../../helpers/errorJudgment';
import nullJudge from '../../helpers/nullJudgement';
import { TextBox, errorViewer } from '../Input/TextBox';
import DateSelect from '../Input/DateSelect';
import historykana from 'historykana';
import { useEffect, useState } from 'react';


const BasicInformation = ({ form, setForm }) => {
  const [inputHistories, setInputHistories] = useState([]);

  // console.log('furigana', form.furigana.value);
/*   useEffect(() => {
    console.log("発火", form.furigana.value);
  }, [form.furigana.touch]); */

  const changeHandler = (name) => (value) => {
    if (name === 'fullname') {
      // console.log('text::', value.target.value);
      setInputHistories((prev) => {
        return [...prev, value.target.value]
      })
      // console.log('inputHistories', inputHistories);
      // console.log('ふりがな::', historykana(inputHistories));
    }
    if (errorViewer(form, name)) {
      // console.log('change error更新');
      let errFlg = false;
      setForm((prev) => {
        errFlg = errorJudgement(name, value);
        return {
          ...prev, [name]: {
            ...prev[name],
            value: nullJudge(form, name, value),
            valueError: errFlg,
          },
        };
      });
    } else {
      // console.log('change 更新');
      setForm((prev) => {
        if (name === 'fullname') {
          // console.log('blur fullname更新');
          const setFurigana = historykana(inputHistories);

          // console.log('setFurigana', setFurigana);
          const output = {
            ...prev,
            [name]: {
              ...prev[name],
              value: nullJudge(form, name, value),
              valueError: errorJudgement(name, value),
            },
            ['furigana']: {
              ...prev['furigana'],
              value: setFurigana,
              valueError: errorJudgement('furigana', setFurigana),
            },
          }
          // console.log('output', output);
          return output;
        } else {
          // console.log('blur else更新');
          const errFlg = errorJudgement(name, value);
          return {
            ...prev, [name]: {
              ...prev[name],
              value: nullJudge(form, name, value),
              valueError: errFlg,
            },
          };
        }
      });
    }
  }

  const BlurHandler = (name) => (value) => {
    setForm((prev) => {
      // console.log('blur else更新');
      const errFlg = errorJudgement(name, value);
      return {
        ...prev, [name]: {
          ...prev[name],
          value: nullJudge(form, name, value),
          valueError: errFlg,
          touch: true,
        },
      };
    });

    setInputHistories([]);
  };

  // console.log(form, inputHistories);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextBox tgtName='fullname' tgtLabel={form.fullname.label} form={form} onChange={changeHandler('fullname')} onBlur={BlurHandler('fullname')} required={true} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextBox tgtName='furigana' tgtLabel={form.furigana.label} form={form} onChange={changeHandler('furigana')} onBlur={BlurHandler('furigana')} required={true} />
      </Grid>
      <Grid item xs={12} md={12}>
        <DateSelect form={form} tgtName='birthday' onChange={BlurHandler('birthday')} />
      </Grid>
      <Grid item xs={8} md={6}>
        <TextBox tgtName='postCode' tgtLabel={form.postCode.label} form={form} onChange={changeHandler('postCode')} onBlur={BlurHandler('postCode')} required={true} />
      </Grid>
      <Grid item xs={12} md={12}>
        <TextBox tgtName='address' tgtLabel={form.address.label} form={form} onChange={changeHandler('address')} onBlur={BlurHandler('address')} required={true} />
      </Grid>
      <Grid item xs={12} md={12}>
        <TextBox tgtName='address2' tgtLabel={form.address2.label} form={form} onChange={changeHandler('address2')} onBlur={BlurHandler('address2')} required={false} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextBox tgtName='tel' tgtLabel={form.tel.label} form={form} onChange={changeHandler('tel')} onBlur={BlurHandler('tel')} required={true} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextBox tgtName='mail' tgtLabel={form.mail.label} form={form} onChange={changeHandler('mail')} onBlur={BlurHandler('mail')} required={false} />
      </Grid>
      <Grid item xs={12} md={8}>
        <TextBox tgtName='workPlace' tgtLabel={form.workPlace.label} form={form} onChange={changeHandler('workPlace')} onBlur={BlurHandler('workPlace')} required={false} />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextBox tgtName='holiday' tgtLabel={form.holiday.label} form={form} onChange={changeHandler('holiday')} onBlur={BlurHandler('holiday')} required={false} />
      </Grid>
    </Grid>
  );
};

BasicInformation.propTypes = {
  form: PropTypes.object,
  setForm: PropTypes.func,
};

export default BasicInformation;
