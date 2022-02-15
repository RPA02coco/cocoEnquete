import PropTypes from 'prop-types';
// import {useState} from 'react';
import styles from './Works.module.css'

const Works = () => {
  // const [checkedItems, setCheckedItems] = useState({})
  const workLists = [
    '会社員', '会社役員', '契約社員', '公務員・団体職員', '経営者', '商工自営',
    '医師', '弁護士', '会計士・税理士', '弁理士', 'アルバイト・パート', '主婦・主夫', 
    '学生', '無職', 'その他'
  ];

  const CheckBox = ({id, value, checked, onChange}) => {
    return (
      <input
        id={id}
        type="checkbox"
        name={value}
        checked={checked}
        onChange={onChange}
        value={value}
      />
    )
  }

  /*const handleChange = (e) => {
        setCheckedItems({
          ...checkedItems,
          [e.target.id]: e.target.checked
        })
        console.log('checkedItems:', checkedItems)
      }*/

  return(
    <div>
      <p> ◆世帯主様について教えてください</p><br />
      <p>    ご職業:</p><br />

      {workLists.map((item, index) => {
          index = index + 1
          return (
            <div className={styles.workitem} key={`key_${index}`}>
              <CheckBox
                  id={`id_${index}`}
                  value={item}
                  /*
                  checked={checkedItems[item.id]}
                  onChange={handleChange}
                  */
                />
              <label htmlFor={`id_${index}`}>
                
                {item}
              </label>
            </div>
          )
        })}
    </div>    
  )
}

Works.propTypes = {
  event: PropTypes.object,
};

export default Works;