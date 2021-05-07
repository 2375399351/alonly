/*
京喜农场 Tokens
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
// 每个账号 token 是一个 json，示例如下
// {"farm_jstoken":"749a90f871adsfads8ffda7bf3b1576760","timestamp":"1610165423873","phoneid":"42c7e3dadfadsfdsaac-18f0e4f4a0cf"}
let JxncTokens = [
  '{"timestamp":"1618562592284","phoneid":"tqlh5mywdsdh0pv69f8qjs0qbwu3ecod33qd8tkd","farm_jstoken":"aeee75b750a747921b7bc7b40e114fc3"}',//账号一的京喜农场token
  '{"timestamp":"1618562660674","phoneid":"jk11eueu0lchf8akgae4gxgiqf1gvkmig8j6fw9n","farm_jstoken":"525f2e3a1103961b8a4d100ac99cbed0"}',//账号二的京喜农场token
  '{"timestamp":"1618562707514","phoneid":"j8fqc45junfejo6afe9ou6t7zlww43r9j6o89zr2","farm_jstoken":"28e69ef5954b6017fbca80206cc03a7b"}',//账号三的京喜农场token
]
// 判断github action里面是否有京喜农场 token 
if (process.env.JXNCTOKENS) {
  if (process.env.JXNCTOKENS.indexOf('&') > -1) {
    console.log(`您的京喜农场 token 选择的是用&隔开\n`)
    JxncTokens = process.env.JXNCTOKENS.split('&');
  } else if (process.env.JXNCTOKENS.indexOf('\n') > -1) {
    console.log(`您的京喜农场 token 选择的是用换行隔开\n`)
    JxncTokens = process.env.JXNCTOKENS.split('\n');
  } else {
    JxncTokens = process.env.JXNCTOKENS.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`由于您secret里面未提供 tokens，当种植 APP 种子时，将不能正常进行任务，请提供 token 或 种植非 APP 种子！`)
}
for (let i = 0; i < JxncTokens.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['JXNCTOKEN' + index] = JxncTokens[i];
}
