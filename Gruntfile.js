module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 80,
          keepalive: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
};
