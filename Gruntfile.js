/*global module:false */

module.exports = function (grunt) {
	grunt.initConfig({
		jshint: {
			options: {
				globals: {
					curly: true,
					eqeqeq: true
				}
			}
		}
	});
};