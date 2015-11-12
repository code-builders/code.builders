module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      sass: {
        files: ['src/scss/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      },
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {
          "public/css/app.css": "src/scss/app.scss"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['watch']);};
