const {Student} = require('../models')

const index = async (req, res) => {
    const data = await Student.findAll()
    if(data?.length > 0){
        return res.json({
            message: 'Student fetch success!',
            data: data
        })
    }
    res.status(404).json({
        'message': 'Data not found!',
        'error': data
    })
}

const store = async (req, res) => {
    try{
        const {name, classroom, major} = req?.body
        const data = await Student.create({
            name: name,
            classroom: classroom,
            major: major
        })
        return res.json({
            message: 'Student created successfully',
            data: data
        })
    }catch(e){
        res.status(500).json({
            'message': 'DB ERROR',
            'error': e
        })
    }
}

const detail = async (req, res) => {
    const idParams = req?.params?.id
    const data = await Student.findByPk(idParams)
    if(!data){
        return res.status(404).json({
            message: 'Student not found',
            data: data
        })
    }
    res.status(200).json({
        message: 'Student fetch success',
        data: data
    })
}

const update = async (req, res) => {
    const idParams = req?.params?.id
    const dataTable = {name, classroom, major} = req?.body
    const data = await Student.update(dataTable, {where: {id: idParams}})
    if(data === 0){
        return res.status(404).json({
            message: 'Student not found',
            data: data
        })
    }
    const dataUpdated = await Student.findByPk(idParams)
    res.status(200).json({
        message: 'Student updated successfully',
        data: dataUpdated
    })
}

const destroy = async (req, res) => {
    const idParams = req?.params?.id
    const data = await Student.destroy({where: {id: idParams}})
    if(data === 0){
        return res.status(404).json({
            message: 'Student not found',
            data: data
        })
    }
    res.status(200).json({
        message: 'Student deleted successfully',
        data: data
    })
}

module.exports = {
    index,
    store,
    detail,
    update,
    destroy
}