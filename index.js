const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

//app 에 cors를 사용하겠다
//비용하면 모든 요청에 대해 허용
//설정도 가능 
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hellow Wolrd!')
})

app.get('/dog', (req, res) => {
    res.send({'sound': '멍멍'})
  })

  
app.get('/cat', (req, res) => {
    res.json({'sound':  '야옹'})
  })

app.get('/user/:id', (req, res) => {
    // const q = req.params
    // console.log(q)
    const q = req.query
    console.log(q)

    res.json(q)
})

//동물소리 API 제작
app.get('/sound/:name', (req, res) => {
  const p = req.params
  
  //value값 한 번에 넣기
  const { name } = req.params
  console.log(name)
  
  if (name == "dog") {
    res.json({'sound': '멍멍'})
  } else if(name == "cat") {
    res.json({'sound': '야옹'})
  } else if(name == "pig") {
    res.json({'sound': '꿀꿀'})
  } else {
    res.json({'sound': '알 수 없음'})
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})