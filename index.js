const application = require('./dist');

module.exports = application;

if (require.main === module) {
  // Run the application
  const config = {
    rest: {
      // cors: {
      //   origin: 'https://www.google.com/',
      //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      //   preflightContinue: false,
      //   optionsSuccessStatus: 200,
      //   credentials: true,
      // },
      port: +(process.env.PORT || 3000),
      host: process.env.HOST,
      openApiSpec: {
        // useful when used with OpenAPI-to-GraphQL to locate your application
        setServersFromRequest: true,
      },
    },
  };
  application.main(config).catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}
