export const workLists = [
  '選択してください', '会社員', '会社役員', '契約社員', '公務員・団体職員', '経営者', '商工自営',
  '医師', '弁護士', '会計士・税理士', '弁理士', 'アルバイト・パート', '主婦・主夫',
  '学生', '無職', 'その他',
];

// const annualIncomeLists = Object.keys(AIobjLists);
export const incomeLists = {
  '選択してください': {min: '', max: ''},
  '～300万円': { min: '1', max: '300' },
  '～400万円': { min: '301', max: '400' },
  '～500万円': { min: '401', max: '500' },
  '～600万円': { min: '501', max: '600' },
  '～700万円': { min: '601', max: '700' },
  '～800万円': { min: '701', max: '800' },
  '～900万円': { min: '801', max: '900' },
  '～1,000万円': { min: '901', max: '1000' },
  '～1,100万円': { min: '1001', max: '1100' },
  '～1,200万円': { min: '1101', max: '1200' },
  '～1,300万円': { min: '1201', max: '1300' },
  '～1,400万円': { min: '1301', max: '1400' },
  '～1,500万円': { min: '1401', max: '1500' },
  '～2,000万円': { min: '1501', max: '2000' },
  '2,001万円～': { min: '2001', max: '2001' },
  '収入無し': { min: '0', max: '0' },
}

export const visitPurposeLists = [
  '家づくりの進め方について知りたい',
  '予算の組み方について知りたい',
  '土地探しについて知りたい',
  '当社の家づくりについて知りたい',
  '当社で具体的に家づくりを検討したい',
  '現在の住まいのことで相談したい',
  'まずはモデルハウスなどを見たい',
  'その他'
];

export const importantPointLists = [
  '会社規模', '外観デザイン', '内観デザイン', '価格', '自然素材', '高気密・高断熱',
  '耐震・免震・制震', '間取り・プラン', 'スタッフ対応', '自社施工', '省エネ・ZEH',
  'アフターフォロー', 'その他'
];

export const currentHomeLists = [
  '賃貸', '社宅・官舎', '持ち家', '同居', 'その他'
];

export const moveInNumLists = [
  '選択してください', '1人', '2人', '3人', '4人', '5人', '6人', '7人以上'
]

export const moveInFormLists = [
  '単身世帯', '二世帯', '三世帯', '店舗併用', 'その他'
]

export const moveInSeasonLists = [
  '半年以内', '1年以内', '2年以内', '2年以上'
]

export const budgetLists = {
  '選択してください': {min: '', max: ''},
  '1,499万円以下': { min: '1', max: '1499' },
  '1,500～1,999万円': { min: '1500', max: '1999' },
  '2,000～2,499万円': { min: '2000', max: '2499' },
  '2,500～2,999万円': { min: '2500', max: '2999' },
  '3,000～3,499万円': { min: '3000', max: '3499' },
  '3,500～3,999万円': { min: '3500', max: '3999' },
  '4,000万円以上': { min: '4000', max: '4000' },
}

export const ownResourcesLists = {
  '選択してください': {min: '', max: ''},
  '～100万円': { min: '1', max: '100' },
  '～200万円': { min: '101', max: '200' },
  '～500万円': { min: '201', max: '500' },
  '～800万円': { min: '501', max: '800' },
  '～999万円': { min: '801', max: '999' },
  '1000万円～': { min: '1000', max: '1000' },
  '未定': { min: '0', max: '0' },
}

export const landExistenceLists = [
  'あり', 'なし'
]

export const siteBrowsingLists = [
  'はい', 'いいえ'
]

export const documentRequestLists = [
  'はい', 'いいえ'
]

/**
 * '10.知人・ご友人からのご紹介',
 * '11.該当なし',
 * 上記2項目は別途実装
 */
export const informationSourceLists = [
  '1.当社ホームページ',
  '2.Facebook',
  '3.Instagram',
  '4.LINE',
  '5.チラシ',
  '6.SUUMO(ネット・雑誌)',
  '7.スマイル',
  '8.工事看板',
  '9.ハウスドゥ！(夢のおてつだい)からのご紹介'
]

export const informationSourceLists2 = [
  '10.知人・ご友人からのご紹介'
]
export const informationSourceLists3 = [
  '11.該当なし'
]