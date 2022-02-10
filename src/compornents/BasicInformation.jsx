import PropTypes from 'prop-types';
import {useState} from 'react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {ja} from 'date-fns/locale';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';

const BasicInformation = () => {
  
  const [dateEntered, setDateEntered] = useState(new Date());
  const [birthday, setBirthday] = useState(new Date());

  const changeHandlerDE = (newValue) => {
    setDateEntered(newValue);
  }
  const changeHandlerBD = (newValue) => {
    setBirthday(newValue);
  };

  return (
    <table>
      <tbody>
        <tr>
          <th className ="fullNameLabel">世帯主様お名前</th>
          <td className="kanji"><input type="text" name="name" /></td>
        </tr>
        <tr>
          <th className='furiganaLabel'>フリガナ</th>
          <td className="furigana"><input type="text" name="furigana" /></td>
        </tr>
        <tr>
          <th className='dateEnteredLabel'>ご記入日</th>
          <td className='dateEnteredYearHead'>
            <LocalizationProvider dateAdapter={AdapterDateFns} locale={ja}>
                <DateTimePicker
                  label="年月日 時間"
                  value={dateEntered}
                  mask="____年__月__日 __:__"
                  inputFormat="yyyy年MM月dd日 HH:mm"
                  views={['year', 'month','day', 'hours', 'minutes']}
                  onChange={changeHandlerDE}
                  renderInput={(params) => <TextField {...params} />}
                />
                </LocalizationProvider>
          </td>
        </tr>
        <tr>
          <th className='birthdayLabel'>生年月日</th>
          <td className='birthday'>
            <LocalizationProvider dateAdapter={AdapterDateFns} locale={ja}>
              <DatePicker
                label="年月日"
                value={birthday}
                mask="____年__月__日"
                inputFormat="yyyy年MM月dd日"
                views={['year', 'month','day']}
                onChange={changeHandlerBD}
                renderInput={(params) => <TextField {...params} />}
              />
              </LocalizationProvider>
          </td>
        </tr>
        <tr>
          <th className='postCodeLabel'>郵便番号</th>
          <td className='postCode'><input type="text" name="postCode" /></td>
        </tr>
        <tr>
          <th className='addressLabel'>住所</th>
          <td className='address'><input type="text" name="address" /></td>
        </tr>
        <tr>
          <th className='telLabel'>TEL</th>
          <td className='tel'><input type="text" name="tel" /></td>
        </tr>
        <tr>
          <th className='MailLabel'>MAIL</th>
          <td className='Mail'><input type="text" name="mail" /></td>
        </tr>
        <tr>
          <th className='workPlaceLabel'>ご勤務先</th>
          <td className='workPlace'><input type="text" name="workPlace" /></td>
        </tr>
        <tr>
          <th className='holidayLabel'>ご休日</th>
          <td className='holiday'><input type="text" name="holiday" /></td>
        </tr>
      </tbody>
    </table>
  )
}

BasicInformation.propTypes = {
  event: PropTypes.object,
};

export default BasicInformation;