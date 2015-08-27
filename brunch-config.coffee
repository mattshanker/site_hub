exports.config =
  # See http://brunch.io/#documentation for docs.
  files:
    # javascripts:
    #   joinTo: 'app.js'
    stylesheets:
      joinTo: 'css/styles.css'
  paths:
    public:'.'
    watch: ['*.html, css/styles.css']
  plugins:
          browserSync:
                      port: 3334,
                      logLevel: 'debug',
                      logConnections: true,
                      logFileChanges: true,
                      injectChanges: true
                      scrollProportionally: true
