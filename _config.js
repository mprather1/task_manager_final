var config = {};

config.postgresURI = {
  development: "postgres://postgres:postgres@localhost:5432/api_development",
  test: "postgres://postgres:postgres@localhost:5432/api_test",
  production: "postgres://postgres:postgres@localhost:5432/api_production"
};

module.exports = config;