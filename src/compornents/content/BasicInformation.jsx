import PropTypes from 'prop-types';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import { ja } from 'date-fns/locale';
import { Grid, TextField } from '@mui/material';
import errorJudgement from '../../helpers/errorJudgment';
import nullJudge from '../../helpers/nullJudgement';
import { TextBox } from '../Input/TextBox';

const BasicInformation = ({ form, setForm }) => {
  const changeHandler = (name) => (value) => {
    if (form[name].valueError) {
      let errFlg = false;
      setForm((prev) => {
        errFlg = errorJudgement(name, value);
        return {
          ...prev, [name]: {
            ...prev[name],
            touch: true,
            value: nullJudge(form, name, value),
            valueError: errFlg,
          },
        };
      });
    }
  }

  const BlurHandler = (name) => (value) => {
    let errFlg = false;
    setForm((prev) => {
      errFlg = errorJudgement(name, value);
      return {
        ...prev, [name]: {
          ...prev[name],
          touch: true,
          value: nullJudge(form, name, value),
          valueError: errFlg,
        },
      };
    });
  };

  console.log(form);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextBox tgtName='fullname' form={form} onChange={changeHandler('fullname')} onBlur={BlurHandler('fullname')} required={true} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextBox tgtName='furigana' form={form} onChange={changeHandler('furigana')} onBlur={BlurHandler('furigana')} required={true} />
      </Grid>
      <Grid item xs={12} md={12}>
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ja}>
          <DatePicker className='inputdates'
            label="生年月日"
            value={form.birthday.value}
            defaultValue={form.birthday.value === '' ? '' : form.birthday.value}
            mask="____年__月__日"
            inputFormat="yyyy年MM月dd日"
            views={['year', 'month', 'day']}
            onChange={BlurHandler('birthday')}
            sx={{ backgroundColor: '#ffffff' }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={8} md={6}>
        <TextBox tgtName='postCode' form={form} onChange={changeHandler('postCode')} onBlur={BlurHandler('postCode')} required={true} />
      </Grid>
      <Grid item xs={12} md={12}>
        <TextBox tgtName='address' form={form} onChange={changeHandler('address')} onBlur={BlurHandler('address')} required={true} />
      </Grid>
      <Grid item xs={12} md={12}>
        <TextBox tgtName='address2' form={form} onChange={changeHandler('address2')} onBlur={BlurHandler('address2')} required={false} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextBox tgtName='tel' form={form} onChange={changeHandler('tel')} onBlur={BlurHandler('tel')} required={true} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextBox tgtName='mail' form={form} onChange={changeHandler('mail')} onBlur={BlurHandler('mail')} required={true} />
      </Grid>
      <Grid item xs={12} md={8}>
        <TextBox tgtName='workPlace' form={form} onChange={changeHandler('workPlace')} onBlur={BlurHandler('workPlace')} required={false} />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextBox tgtName='holiday' form={form} onChange={changeHandler('holiday')} onBlur={BlurHandler('holiday')} required={false} />
      </Grid>
    </Grid>
  );
};

BasicInformation.propTypes = {
  form: PropTypes.object,
  setForm: PropTypes.func,
};

export default BasicInformation;
