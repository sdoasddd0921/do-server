const gulp = require('gulp')
const { resolve } = require('path')
const sftp = require('gulp-sftp')
const fs = require('fs')

const ignoreFiles = [
	'node_modules',
	'.ftppass'
]

const uploadDir = './'

const targetFiles = fs.readdirSync(uploadDir).filter(
	file => ignoreFiles.indexOf(file) === -1
)

console.log(targetFiles)

const sftpOption = {
	host: '188.166.124.19',
	user: 'root',
	remotePath: '/root/zq/do-server'
}

gulp.task('default', () => {
	const a = gulp.src(targetFiles)
		.pipe(sftp(sftpOption))
})