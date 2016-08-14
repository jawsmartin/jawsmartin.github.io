module.exports = function(grunt) {

  // Project configurations
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'output.css': ['foo.css', 'bar.css']
        }
      }
    }    
  });

  // Plug-Ins

  // Load the plugin that minimizes CSS task.
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Load the plugin that minimizes CSS task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

  // Minify CSS
  grunt.loadNpmTasks('grunt-contrib-cssmin');

};