import request from 'UTILS/request'
import routes from './routes'

export function userLogin ({
  username,
  password
}) {
  return request.post(routes.LOGIN, {
    username,
    password
  })
}