exports.config =
  # See http://brunch.io/#documentation for docs.
  files:
    # javascripts:
    #   joinTo: 'app.js'
    stylesheets:
      joinTo: 'css/styles.css'
  paths:
    public:'.'
    watch: ['*.html', 'css/styles.css']
  plugins:
          browserSync:
                      open: "local",
                      startPath: "index.html",
                      port: 3334,
                      logLevel: 'debug',
                      logConnections: true,
                      logFileChanges: true,
                      injectChanges: false,
                      scrollProportionally: true
