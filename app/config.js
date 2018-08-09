const env = process.env.NODE_ENV || 'dev'

const globalConfig = {
  development: {
    api: 'http://localhost:8080',
  },
  stage: {
    api: 'http://localhost:8080',
  },
  production: {
    api: 'http://localhost:8080',
  },
}
export default globalConfig[env]