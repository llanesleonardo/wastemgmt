import * as usersServices from '@services/users.services'

/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */

export async function index(req, res, next) {
  try {
    const users = await usersServices.index() // call service and store the result in a constant variable
    res.status(200).json(users) // send status code and json rresponse to the client
  } catch (e) {
    console.error(e.stack)
  }
}

export async function store(req, res, next) {
  try {
    const { name, lastname, email, username, roles, jwt } = req.body
    const storedUser = await usersServices.store(
      name,
      lastname,
      email,
      username,
      roles,
      jwt
    ) // call service and store the result in a constant variable
    res.status(200).json(storedUser) // send status code and joson rresponse to the client
  } catch (e) {
    console.error(e.stack)
  }
}

export async function show(req, res, next) {
  try {
    const user = await usersServices.show(req.params.id) // call service and store the result in a constant variable
    res.status(200).json(user) // send status code and joson rresponse to the client
  } catch (e) {
    console.error(e.stack)
  }
}

export async function update(req, res, next) {
  try {
    const {
      name,
      lastname,
      email,
      username,
      active,
      roles,
      jwt,
      confirmUser,
      activationDate
    } = req.body
    const updatedUser = await usersServices.update(
      req.params.id,
      name,
      lastname,
      email,
      username,
      active,
      roles,
      jwt,
      confirmUser,
      activationDate
    ) // call service and store the result in a constant variable
    res.status(200).json(updatedUser) // send status code and joson rresponse to the client
  } catch (e) {
    console.error(e.stack)
  }
}

export async function destroy(req, res, next) {
  try {
    const destroyedUser = await usersServices.destroy(req.params.id) // call service and store the result in a constant variable
    res.status(200).json(destroyedUser) // send status code and joson rresponse to the client
  } catch (e) {
    console.error(e.stack)
  }
}
