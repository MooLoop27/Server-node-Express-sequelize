const express = require('express')
const app =express()
const PORT = 3000
const studentRoute = require('./routes/student.route')

app.use(express.json())
app.use('/service/student', studentRoute)

app.get('/', (require, res) => {
  res.send({
    message: "server is running"
  })
})

app.listen(PORT, () => console.log(`SERVER RUNNING ${PORT}`))