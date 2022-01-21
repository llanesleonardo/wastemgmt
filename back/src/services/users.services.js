import { getRepository, getConnection } from 'typeorm'
import { User } from '@entities/User'
/**
 * @getPhotoRepository get a specific repositor, similar to use a specific schema or table in the database
 */

export async function index() {
  try {
    return await getConnection().getRepository(User).find()
  } catch (e) {
    console.error(e.stack)
  }
}

/**
 * @show fetch only one document
 * @param  {} id
 */
export async function show(id) {
  try {
    return await getConnection().getRepository(User).findOne(id)
  } catch (e) {
    console.error(e.stack)
  }
}

/**
 * @store crete a document an then save that document into db
 * @param  {} payload
 */
export async function store(name, lastname, email, username, roles, jwt) {
  try {
    const user = new User()

    user.name = name
    user.lastname = lastname
    user.email = email
    user.username = username
    user.active = 0
    user.roles = roles
    user.jwt = jwt
    user.confirmUser = 0
    user.creationDate = new Date()
    user.modificationDate = new Date()
    user.activationDate = null
    // let photo = await getPhotoRepository().create(payload)
    return await getConnection().getRepository(User).save(user)
  } catch (e) {
    console.error(e.stack)
  }
}

/**
 * @update fetch one document, merge with the old same document and then save it into db
 * @param  {} id
 * @param  {} paypload
 */
export async function update(
  id,
  name,
  lastname,
  email,
  username,
  active,
  roles,
  jwt,
  confirmUser,
  activationDate
) {
  try {
    let userToUpdate = await getConnection().getRepository(User).findOne(id)
    userToUpdate.name = name
    userToUpdate.lastname = lastname
    userToUpdate.email = email
    userToUpdate.username = username
    userToUpdate.active = active
    userToUpdate.roles = roles
    userToUpdate.jwt = jwt
    userToUpdate.confirmUser = confirmUser
    userToUpdate.activationDate = activationDate
    userToUpdate.modificationDate = new Date()
    // let photo = await getPhotoRepository().create(payload)
    return await getConnection().getRepository(User).save(userToUpdate)
  } catch (e) {
    console.error(e.stack)
  }
}

/**
 * @destroy delete a specific document in the db
 * @param  {} id
 */
export async function destroy(id) {
  try {
    return await getConnection().getRepository(User).delete(id)
  } catch (e) {
    console.error(e.stack)
  }
}
