module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'API',
      script    : 'index.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'gick',
      key : '/home/gick/.ssh/gickjessie_rsa',
      host : '51.15.135.233',
      ref  : 'origin/master',
      repo : 'git@github.com:gick/silly-joke.git',
      path : '/home/gick/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    dev : {
      user : 'gick',
      key : '/home/gick/.ssh/gickjessie_rsa',
      host : '51.15.135.233',
      ref  : 'origin/master',
      repo : 'git@github.com:gick/silly-joke.git',
      path : '/home/gick/dev',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
};
