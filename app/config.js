const env = process.env.NODE_ENV || 'dev'

const globalConfig = {
  development: {
    api: 'http://localhost:8080',
  },
  stage: {
    api: 'http://admin.medx.nordwhale.com',
  },
  production: {
    api: 'http://localhost:8080',
  },
}
export default globalConfig[env]