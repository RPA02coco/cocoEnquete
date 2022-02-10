import PropTypes from 'prop-types';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {ja} from 'date-fns/locale';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';

const BasicInformation = ({reportDate, setReportDate}) => {
  
  const changeHandler = (newValue) => {
    setReportDate(newValue);
  };

  return (
    <table>
      <tr>
        <th className ="fullNameLabel">世帯主様お名前</th>
        <td className="kanji"></td>
      </tr>
      <tr>
        <th className='furiganaLabel'>フリガナ</th>
        <td className="furigana"></td>
      </tr>
      <tr>
        <th className='dateEnteredLabel'>ご記入日</th>
        <td className='dateEnteredYearHead'>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={ja}>
          <DatePicker
            label="年月"
            value={reportDate}
            openTo="month"
            inputFormat="yyyy年MM月"
            views={['year', 'month']}
            onChange={changeHandler}
            renderInput={(params) => <TextField {...params} />}
          />
          </LocalizationProvider>
        </td>
      </tr>
      <tr>
        <th className='birthdayLabel'>生年月日</th>
        <td className='birthday'></td>
      </tr>
      <tr>
        <th className='postCodeLabel'>郵便番号</th>
        <td className='postCode'></td>
      </tr>
      <tr>
        <th className='addressLabel'>住所</th>
        <td className='address'></td>
      </tr>
      <tr>
        <th className='telLabel'>電話番号</th>
        <td className='tel'></td>
      </tr>
      <tr>
        <th className='MailLabel'>メール</th>
        <td className='Mail'></td>
      </tr>
      <tr>
        <th className='workPlaceLabel'>ご勤務先</th>
        <td className='workPlace'></td>
      </tr>
      <tr>
        <th className='holidayLabel'>ご休日</th>
        <td className='holiday'></td>
      </tr>
    </table>
  )
}

BasicInformation.propTypes = {
  event: PropTypes.object,
};

export default BasicInformation;