import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import errorJudgement from '../../helpers/errorJudgment';
import nullJudge from '../../helpers/nullJudgement';
import { TextBox, errorViewer } from '../Input/TextBox';
import DateSelect from '../Input/DateSelect';
import { useEffect } from 'react';
import * as AutoKana from 'vanilla-autokana';

let autokana = '';

const BasicInformation = ({ form, setForm }) => {
  useEffect(() => {
    autokana = AutoKana.bind('#fullname', '#furigana');
  }, [])

  const changeHandler = (name) => (value) => {
    if (errorViewer(form, name)) {
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
      setForm((prev) => {
        if (name === 'fullname') {
          const furigana = autokana.getFurigana();
          console.log('ふりがな(取得)', furigana);
          const output = {
            ...prev,
            [name]: {
              ...prev[name],
              value: nullJudge(form, name, value),
              valueError: errorJudgement(name, value),
            },
            ['furigana']: {
              ...prev['furigana'],
              value: furigana,
              valueError: errorJudgement('furigana', furigana),
            },
          }
          return output;
        } else {
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
  };

  // console.log(form);
  // console.log('ふりがな', autokana);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextBox
          tgtName='fullname'
          tgtLabel={form.fullname.label}
          form={form}
          onChange={changeHandler('fullname')}
          onBlur={BlurHandler('fullname')}
          required={true}
          type='text'
          placeholder='山田　太郎'
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextBox
          tgtName='furigana'
          tgtLabel={form.furigana.label}
          form={form}
          onChange={changeHandler('furigana')}
          onBlur={BlurHandler('furigana')}
          required={true}
          type='text'
          placeholder='やまだ　たろう'
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <DateSelect form={form} tgtName='birthday' onChange={BlurHandler('birthday')} />
      </Grid>
      <Grid item xs={8} md={6}>
        <TextBox
          tgtName='postCode'
          tgtLabel={form.postCode.label}
          form={form}
          onChange={changeHandler('postCode')}
          onBlur={BlurHandler('postCode')}
          required={true}
          type='tel'
          placeholder='471-0871'
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <TextBox
          tgtName='address'
          tgtLabel={form.address.label}
          form={form}
          onChange={changeHandler('address')}
          onBlur={BlurHandler('address')}
          required={true}
          type='text'
          placeholder='愛知県豊田市元宮町5丁目8-2'
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <TextBox
          tgtName='address2'
          tgtLabel={form.address2.label}
          form={form}
          onChange={changeHandler('address2')}
          onBlur={BlurHandler('address2')}
          required={false}
          type='text'
          placeholder='マンション・アパート名　〇〇〇号室'
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextBox
          tgtName='tel'
          tgtLabel={form.tel.label}
          form={form}
          onChange={changeHandler('tel')}
          onBlur={BlurHandler('tel')}
          required={true}
          type='tel'
          placeholder='0565-35-0051'
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextBox
          tgtName='mail'
          tgtLabel={form.mail.label}
          form={form}
          onChange={changeHandler('mail')}
          onBlur={BlurHandler('mail')}
          required={false}
          type='email'
          placeholder='example@mail.jp'
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <TextBox
          tgtName='workPlace'
          tgtLabel={form.workPlace.label}
          form={form}
          onChange={changeHandler('workPlace')}
          onBlur={BlurHandler('workPlace')}
          required={false}
          type='text'
          placeholder='株式会社 夢のおてつだい'
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextBox
          tgtName='holiday'
          tgtLabel={form.holiday.label}
          form={form}
          onChange={changeHandler('holiday')}
          onBlur={BlurHandler('holiday')}
          required={false}
          type='text'
          placeholder='土日, 不定休 など'
        />
      </Grid>
      <Grid item xs={12} md={12}></Grid>
    </Grid>
  );
};

BasicInformation.propTypes = {
  form: PropTypes.object,
  setForm: PropTypes.func,
};

export default BasicInformation;
