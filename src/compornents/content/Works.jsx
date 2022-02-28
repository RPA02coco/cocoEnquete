import PropTypes from 'prop-types';
// import {useEffect, useState} from 'react';
import styles from './Works.module.css';
import CheckBox from '../CheckBox/CheckBox';

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

  const changeHandler = (e) => {
    const name = e.target.name;
    // let arrayName = chkWorkList;
    // if (name === 'annualIncome') {
    //   arrayName = chkAnnualIncomeLists;
    // }

    setForm((prev) => {
      let chkWorkList = prev[name].value;
      console.log('e.target.value', e.target.value);
      console.log('chkWorkList', chkWorkList, chkWorkList.includes(e.target.value));
      // e.target.valueを配列化する処理をここに入れる
      // バグあり要修正
      if (chkWorkList.includes(e.target.value)) {
        chkWorkList = chkWorkList.filter((item) => item !== (e.target.value));
      } else {
        chkWorkList = chkWorkList.concat(e.target.value);
      }
      console.log('setForm内', chkWorkList);

      return {
        ...prev,
        [name]: { ...prev[name], value: chkWorkList },
      };
    });
  };

  console.log(form);

  return (
    <div>
      <p className={styles.itemTitle}> ◆世帯主様について教えてください</p>
      <p className={styles.subTitle}>ご職業:</p>
      <div className={styles.workHeader}>
        {workLists.map((item, index) => {
          return (
            <div className={styles.workitem} key={`key_works${item}`}>
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
            </div>
          );
        })}
      </div>
      <br />
      <p className={styles.subTitle}>ご年収:</p>
      <div className={styles.workHeader}>
        {annualIncomeLists.map((item, index) => {
          return (
            <div className={styles.workitem} key={`key_annualIncome${item}`}>
              <CheckBox
                id={`id_annualIncome${index}`}
                value={item}
                name={'annualIncome'}
                checked={form.annualIncome.value.includes(item)}
                onChange={changeHandler}
              />
              <label htmlFor={`id_annualIncome${index}`}>
                {item}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Works.propTypes = {
  form: PropTypes.object,
  setForm: PropTypes.func,
};

export default Works;
