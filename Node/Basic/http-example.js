const axios = require('axios')

axios.get('http://www.google.com')
.then(res => console.log(res))
.catch(err => console.log(err))