/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.

    watch: {
        pug:{
            files: ["views/*.pug", "views/*.slim"],
            tasks: ["pug","slim:dist"]
        }
    },

    pug: {
        compile: {
            options: {
                pretty: true
            },
            files: {
                'about.html': 'views/about.pug',
                'index.html': 'views/index.pug',
                'contact.html': 'views/contact.pug'
            }
        }
    },

    slim: {
      dist: {
        options:{
            pretty:true
        },
        files: [{
          expand: true,
          cwd: 'views/',
          src: ['**.slim'],
          dest: 'views/',
          ext: '.html'
        }]
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-slim');
  // Default task.
  grunt.registerTask('default', ['pug','slim:dist']);

};
