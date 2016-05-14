module.exports = function(grunt) {
  grunt.initConfig({
    browserSync: {
      server: {
        options: {
          server: {
            baseUrl: './'
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['browserSync']);
};
