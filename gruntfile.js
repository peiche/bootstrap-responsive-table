module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      build: [
        'css'
      ]
    },
    sass: {
      dev: {
        options: {
          style: 'expanded',
          noCache: true,
          sourcemap: 'none',
          unixNewlines: true
        },
        files: {
          'css/bootstrap.responsive-table.css': 'sass/bootstrap.responsive-table.scss'
        }
      },
      prod: {
        options: {
          style: 'compressed',
          noCache: true,
          sourcemap: 'none',
          unixNewlines: true
        },
        files: {
          'css/bootstrap.responsive-table.min.css': 'sass/bootstrap.responsive-table.scss'
        }
      }
    },
    autoprefixer: {
      dev: {
        files: {
          'css/bootstrap.responsive-table.css': 'css/bootstrap.responsive-table.css'
        }
      },
      prod: {
        files: {
          'css/bootstrap.responsive-table.min.css': 'css/bootstrap.responsive-table.min.css'
        }
      }
    },
    watch: {
      css: {
        files: 'sass/*.scss',
        tasks: ['sass', 'autoprefixer']
      }
    }
  });

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('dev', ['clean', 'sass:dev', 'autoprefixer:dev']);
  grunt.registerTask('prod', ['clean', 'sass:prod', 'autoprefixer:prod']);
  grunt.registerTask('build', ['clean', 'sass:dev', 'autoprefixer:dev', 'sass:prod', 'autoprefixer:prod']);
};
