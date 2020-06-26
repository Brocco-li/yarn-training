'use strict';

const axios = require('axios');
// require関数でモジュールとして取得。
axios.get('https://www.google.com').then(res => {
    //axiosのgetメソッドにリクエストのURLとそのレスポンスを受け取った際の処理を無名関数で渡している
    console.log(res.data);
});
