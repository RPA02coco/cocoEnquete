import PropTypes from 'prop-types';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import { ja } from 'date-fns/locale';
import { Grid, TextField } from '@mui/material';
import errorJudgement from '../../helpers/errorJudgment';
import nullJudge from '../../helpers/nullJudgement';
import { TextBox, errorViewer } from '../Input/TextBox';

const BasicInformation = ({ form, setForm }) => {
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
    }
  }

  const BlurHandler = (name) => (value) => {
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
  };

  // console.log(form);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextBox tgtName='fullname' tgtLabel={form.fullname.label} form={form} onChange={changeHandler('fullname')} onBlur={BlurHandler('fullname')} required={true} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextBox tgtName='furigana' tgtLabel={form.furigana.label} form={form} onChange={changeHandler('furigana')} onBlur={BlurHandler('furigana')} required={true} />
      </Grid>
      <Grid item xs={12} md={12}>
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ja}>
          <DatePicker className='inputdates'
            label="【必須】生年月日"
            id='birthday'
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
        <TextBox tgtName='mail' tgtLabel={form.mail.label} form={form} onChange={changeHandler('mail')} onBlur={BlurHandler('mail')} required={true} />
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
