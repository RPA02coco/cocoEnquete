import { Grid } from "@mui/material";
import Information from "../Box/Information";
import Explanation from "../Box/Explanation";

const PrivacyPolicy = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={12}>
        <Information Sentence="※個人情報の取扱いについて" />
        <Explanation>
          ご記入頂きました個人情報は<br />
          【(株)山豊工建　ここすもハウス】<br />
          にて管理し、家づくりの計画や資料の送付のみに使用いたします。<br />
          法令などにより開示を求められた場合を除き、
          ご本人の同意を得ることなく業務に関与するもの以外の第三者に開示することはありません。
        </Explanation>
      </Grid>
    </Grid>
  )
}

export default PrivacyPolicy;