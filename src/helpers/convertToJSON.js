import jsonFormat from '../constantDefinition/form.json'
import format from 'date-fns/format';

/**
 * フォームの内容をJSON形式に変換する。
 * なお、フォームとJSONフォーマットのキーが一致しない場合は、
 * 最小値と最大値がobjectとして格納されている前提で処理を実装している。
 * @param Object form : アンケートフォーム
 * @returns JSON型に変換したアンケートフォーム
 */
const convertToJSON = (form) => {
  Object.keys(form).map((item) => {
    if (jsonFormat[item]) {
      if (Array.isArray(form[item].value)) {
        jsonFormat[item].value = form[item].value.join(',')
      } else {
        jsonFormat[item].value = form[item].value;
      }
    } else {
      // jsonキー≠フォームキー=>最小値と最大値objを分けて格納する
      jsonFormat[`${item}Min`].value = form[item].value.min;
      jsonFormat[`${item}Max`].value = form[item].value.max;
    }
  })
  return jsonFormat;
}

export default convertToJSON;