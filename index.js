const fs = require('fs');
const request = require('axios');
const cheerio = require('cheerio');
const { jsonToFormData, convert } = require('./utils');

const url = 'https://www.imot.bg/pcgi/imot.cgi';
request({
  url: url, 
  method: 'POST',
  headers: {
    cookie: 'imot_session=fd7a2ab0763e4d9452d6e575f85bcefb; imot_session_redirect=;',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  responseType: 'arraybuffer',
  data: jsonToFormData({
    act: 14,
    actions: 2,
    f0: '',
    f1: '',
    f2: '',
    f3: 0,
    f4: 2017, // Year,
    f5: 19, //Week
    f6: 'София', // City,
    f7: 1
  })
}).then(res => {
  // We need this for extracting the json later on. Not needed for the proof of concept demo
  // const html = convert(res.data, 'windows-1251', 'utf8');
  fs.writeFileSync('test.html', res.data)
}).catch(err => {
  console.log(err)
})
