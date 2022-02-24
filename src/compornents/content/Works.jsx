import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './Works.module.css'
import errorJudgement from '../helpers/errorJudgment';
import CheckBox from '../CheckBox/CheckBox';
import joinCheckItems from '../helpers/joinCheckItems';

const Works = ({ form, setForm }) => {
  const [checkedItems, setCheckedItems] = useState({})
  const workLists = [
    '会社員', '会社役員', '契約社員', '公務員・団体職員', '経営者', '商工自営',
    '医師', '弁護士', '会計士・税理士', '弁理士', 'アルバイト・パート', '主婦・主夫',
    '学生', '無職', 'その他'
  ];
  
  const annualIncomeLists = [
    '～300万円', '～400万円', '～500万円', '～600万円', '～700万円', '～800万円',
    '～900万円', '～1,000万円', '～1,100万円', '～1,200万円', '～1,300万円', '～1,400万円',
    '～1,500万円', '～2,000万円', '～2,001万円', '収入無し'
  ];

  const changeHandler = (name) => (value) => {
    setForm((prev) => {
      return {
        ...prev, [name]: {
          ...prev[name],
          value: joinCheckItems(form, name, value),
          valueError: errorJudgement(name, value),
        }
      }
    })
    setCheckedItems({
      ...checkedItems,
      [name.target.id]: name.target.checked
    })
    console.log('checkedItems:', checkedItems)
  };
  /*
const changeHandler = (e) => {
    setCheckedItems({
      ...checkedItems,
      [e.target.id]: e.target.checked
    })
    console.log('checkedItems:', checkedItems)
  }

const changeHandler = (name) => (value) => {
console.log('changeHandler value at works:', value)
setForm((prev) => {
  return {
    ...prev, [name]: {
      ...prev[name],
      value: nullJudge(form, name, value),
      valueError: errorJudgement(name, value),
    }
  }
})
} */

  console.log(form);

  return (
    <div>
      <p className={styles.itemTitle}> ◆世帯主様について教えてください</p>
      <p className={styles.subTitle}>ご職業:</p>
      <div className={styles.workHeader}>
        {workLists.map((item, index) => {
          index = index + 1
          return (
            <div className={styles.workitem} key={`key_${index}`}>
              <CheckBox
                id={`id_${index}`}
                value={item}
                checked={checkedItems[item.id]}
                onChange={changeHandler('works')}
              />
              <label htmlFor={`id_${index}`}>
                {item}
              </label>
            </div>
          )
        })}
      </div>
      <br/>
      <p className={styles.subTitle}>ご年収:</p>
      <div className={styles.workHeader}>
        {annualIncomeLists.map((item, index) => {
          index = index + 1
          return (
            <div className={styles.workitem} key={`key_${index}`}>
              <CheckBox
                id={`id_${index}`}
                value={item}
                checked={checkedItems[item.id]}
                onChange={changeHandler('nenshu')}
              />
              <label htmlFor={`id_${index}`}>
                {item}
              </label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

Works.propTypes = {
  form: PropTypes.object,
  setForm: PropTypes.func,
};

export default Works;