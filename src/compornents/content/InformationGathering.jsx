import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { informationSourceLists, informationSourceLists2, informationSourceLists3 } from '../../constantDefinition/constantDefinition';
import CheckBox from '../Input/CheckBox';
import { TextBox, TBwithUnit } from '../Input/TextBox';
import { handleChangeText, handleChangeCheckbox } from '../../helpers/setValues';
import Question from '../Box/Question';

const InformationGathering = ({ form, setForm }) => {
  const textChange = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: { ...prev[e.target.name], value: handleChangeText(e) },
      }
    })
  }

  const checkboxChange = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: { ...prev[e.target.name], value: handleChangeCheckbox(e, prev) }
      }
    })
  }
  // console.log(form);

  const searchWords = (tgtArray, words) => {
    return tgtArray.find(value => value.indexOf(words) !== -1);
  }

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Question Sentence='情報収集について教えてください' />
        </Grid>
        <Question Sentence='当社の情報を収集する際に利用した情報源は何ですか？ ※複数回答可' />
        <CheckBox
          tgtName='informationSource'
          tgtArray={informationSourceLists}
          onChange={checkboxChange}
          form={form}
          required={false}
        />
        {searchWords(form.informationSource.value, '夢のおてつだい') &&
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextBox
                tgtName='yumePersonInCharge'
                tgtLabel='夢のおてつだい 担当者名'
                form={form}
                onChange={textChange}
                required={false}
                type='text'
                placeholder='山田　太郎'
              />
            </Grid>
          </Grid>
        }
        <Grid item xs={12} md={12}>
          <CheckBox
            tgtName='informationSource'
            tgtArray={informationSourceLists2}
            onChange={checkboxChange}
            form={form}
            required={false}
          />
        </Grid>
        {searchWords(form.informationSource.value, '知人') &&
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TBwithUnit
                tgtName='introducer'
                tgtLabel='ご紹介者様'
                form={form}
                onChange={textChange}
                required={false}
                unit='様'
                type='text'
                inputmode='text'
                placeholder='山田　太郎'
              />
            </Grid>
          </Grid>
        }
        <Grid item xs={12} md={6}>
          <CheckBox
            tgtName='informationSource'
            tgtArray={informationSourceLists3}
            onChange={checkboxChange}
            form={form}
            required={false}
          />
        </Grid>
      </Grid>
    </>
  );
};

InformationGathering.propTypes = {
  form: PropTypes.object,
  setForm: PropTypes.func,
};

export default InformationGathering;