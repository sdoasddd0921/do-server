const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dbUrl = 'mongodb://zsq:zsq123123@ds237748.mlab.com:37748/mdb'

const db = mongoose.createConnection(dbUrl, { useNewUrlParser: true })

const studentSchema = new Schema({
	name: String,
	age: Number,
	ID: String,
	sex: String
})

const Student = db.model('Student', studentSchema)

// const zsq = new People({ name: ZSQ, age: 22 })

// const query = Student.find({}).exec((err, doc) => {
// 	console.log(doc)
// })

exports.findall = () => Student.find({}).exec()