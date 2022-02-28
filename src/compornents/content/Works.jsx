import PropTypes from 'prop-types';
// import {useEffect, useState} from 'react';
import styles from './Works.module.css';
import CheckBox from '../CheckBox/CheckBox';

const Works = ({form, setForm}) => {
  // const [checkedItemsWorks, setCheckedItemsWorks] = useState([]);
  // const [checkedItemsNenshu, setCheckedItemsNenshu] = useState([]);
  const workLists = [
    '会社員', '会社役員', '契約社員', '公務員・団体職員', '経営者', '商工自営',
    '医師', '弁護士', '会計士・税理士', '弁理士', 'アルバイト・パート', '主婦・主夫',
    '学生', '無職', 'その他',
  ];
  let chkWorkList = [];

  const annualIncomeLists = [
    '～300万円', '～400万円', '～500万円', '～600万円', '～700万円', '～800万円',
    '～900万円', '～1,000万円', '～1,100万円', '～1,200万円', '～1,300万円', '～1,400万円',
    '～1,500万円', '～2,000万円', '～2,001万円', '収入無し',
  ];
  const chkAnnualIncomeLists = [];

  const changeHandler = (e) => {
    const name = e.target.name;

    setForm((prev) => {
      console.log('e.target.value', e.target.value);
      console.log('chkWorkList', chkWorkList);
      // e.target.valueをはいれつかするしょりをここに入れる
      // バグあり要修正
      if (chkWorkList = chkWorkList.includes(e.target.value)) {
        chkWorkList.filter((item) => item !== e.target.value);
      } else {
        chkWorkList.concat(e.target.value);
      }

      // returnの中の、valueに設定している値を、↑で設定した配列に変更する
      console.log(chkWorkList);

      return {
        ...prev,
        [name]: {...prev[name], value: chkWorkList},
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
          index = index + 1;
          return (
            <div className={styles.workitem} key={`key_${index}`}>
              <CheckBox
                id={`id_${index}`}
                value={item}
                name={'works'}
                checked={chkWorkList[index-1]}
                onChange={changeHandler}
              />
              <label htmlFor={`id_${index}`}>
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
          index = index + 1;
          return (
            <div className={styles.workitem} key={`key_${index}`}>
              <CheckBox
                id={`id_${index}`}
                value={item}
                name={'annualIncome'}
                checked={chkAnnualIncomeLists[index-1]}
                onChange={changeHandler}
              />
              <label htmlFor={`id_${index}`}>
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
