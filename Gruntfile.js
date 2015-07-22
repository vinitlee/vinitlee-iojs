module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js','src/**/*.js',],
      options: {
        esnext: true,
        globals: {
          jQuery: true
        }
      }
    },
    stylus:{
      compile: {
        options: {},
        import: [],
        files: {
          'public/styles/main.css':['src/styles/main.styl']
        }
      }
    },
    browserify: {
      dist: {
        options: {
          transform: [['babelify',{
                        stage:0,
                        loose:'all'
                      }]]
        },
        files: {
          'public/scripts/bundle.js':'src/scripts/main.js'
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/**/*.js'],
        tasks: ['jshint','browserify'],
      },
      styles: {
        files: ['src/**/*.styl'],
        tasks: ['stylus'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default',['stylus','browserify','jshint']);
  grunt.registerTask('scripts',['browserify','jshint']);
  grunt.registerTask('styles',['stylus']);
};