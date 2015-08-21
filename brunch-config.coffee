exports.config =
  # See http://brunch.io/#documentation for docs.
  files:
    # javascripts:
    #   joinTo: 'app.js'
    stylesheets:
      joinTo: 'css/main.css'
  paths:
    public:'.'
    watch: ['.']
  plugins:
          browserSync:
                      port: 3334,
                      logLevel: 'debug',
                      logConnections: true,
                      logFileChanges: true,
                      injectChanges: true
                      scrollProportionally: true
          postcss:
                  processors: [
                      require('autoprefixer')(['last 3 versions']),
                      require('csswring')
                  ]
