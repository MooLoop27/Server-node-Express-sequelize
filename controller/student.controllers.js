const { request } = require('express')
const { students } = require('../models')


const index = async (request, res) => {
  const data = await students.findAll()

  if (data?.length > 0) {
    return res.json ({
      message: "Student fetch success"
    })
  }
}

const store = async (require, res) => {
  const {name, class_room, major} = request.body

  try{
  const data = await students.create({
    name: name,
    class_room: class_room,
    major: major
  })

    return res,json ({
      message: "Student store success",
      data: data
    })
  } catch (e) {
    res.status(500).json({
      'message': "DB ERROR",
      "error": e
    })
  }
}

module.exports = {
  store
}