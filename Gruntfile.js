module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      compass: {
          options: {
              sassDir: 'src/assets/sass',
              imagesDir: 'src/img',
              cssDir: 'web/assets/css',
              force: true
          },
          dist: {
              options: {
                  environment: 'production',
                  noLineComments: true
              }
          },
          dev: {
              options: {
                  noLineComments: true
              }
          },
          watch: {
              options: {
                  noLineComments: true,
                  watch: true
              }
          }
      },
      assemble: {
        options: {
            layoutdir: 'src/templates/layouts',
            layout: ['default.hbs'],
            partials: ['src/templates/partials/{,*/}*.*','src/sprites/svg/*'],
            helpers: ['partial'],
            flatten: true
        },
        en: {
            options: {
                data: ['src/templates/data/en/*.yml', 'src/templates/data/*.yml']
            },
            src: ['src/templates/pages/en/*.hbs'],
            dest: './web'
        },
    },
    watch: {
        options: {
        },
        dev: {
            files: ['src/assets/sass/**/*.scss', 'src/templates/**/*.hbs'],
            tasks: ['compass:dev', 'assemble:en']
        },
        handlebars: {
            files: ['src/templates/*/*.hbs', 'src/templates/layouts/*.hbs' ],
            tasks: ['assemble:en']
        }
    },
    svg_sprite: {
          generate: {
              cwd: 'web/assets/vendor/material-design-icons',
              src: [
                  '../../../../web/assets/image/ic_menu_24px.svg',
                  '../../../../web/assets/image/ic_important_24px.svg',
                  '../../../../web/assets/image/ic_fullscreen_24px.svg',
                  '../../../../web/assets/image/ic_more_24px.svg',
                  '../../../../web/assets/image/ic_search_24px.svg',
                  '../../../../web/assets/image/ic_home_24px.svg',
                  '../../../../web/assets/image/ic_paint_24px.svg',
                  '../../../../web/assets/image/ic_call_24px.svg',

                    '../../../../web/assets/image/ic_compon_24px.svg',
                    '../../../../web/assets/image/ic_icon_24px.svg',
                    '../../../../web/assets/image/ic_forms_24px.svg',
                    '../../../../web/assets/image/ic_tables_24px.svg',
                    '../../../../web/assets/image/ic_charts_24px.svg',
                    '../../../../web/assets/image/ic_maps_24px.svg',
                    '../../../../web/assets/image/ic_mail_24px.svg',
                    '../../../../web/assets/image/ic_pages_24px.svg',
                    '../../../../web/assets/image/ic_extras_24px.svg',
                    '../../../../web/assets/image/ic_multi_24px.svg',





              ],
              dest: 'src/sprites',
              options: {
                  shape: {
                      id: {
                          generator: function(filename) {
                              var id = filename.match(/ic_(\w+)_\d+/);
                              return id[1];
                          }
                      },
                  },
                  mode: {
                      symbol: {
                          dest: ''
                      }
                  }
              }
          }
      },

  });

  [
    'grunt-contrib-compass',
    'grunt-contrib-watch',
    'grunt-assemble',
    'grunt-svg-sprite'
].forEach(grunt.loadNpmTasks);

  // Default task(s).
  grunt.registerTask('default', [
      'compass:dist',
      'assemble:en'
  ]);

};
