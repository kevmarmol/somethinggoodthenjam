/*global module: false */
module.exports = function (grunt) {


	grunt.initConfig({
		jshint: {
			options: {
				globals: {
					curly: true,
					eqeqeq: true,
					globals: {
						jQuery: true
					}
				}
			},
			all: [
				'Gruntfile.js',
				'node_modules/routes/*.js',
				'src/js/*.js'
			]
		}
	});

	// load tasks
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// default task
	grunt.registerTask('test', ['jshint']);
};