import { getRepository, getConnection } from 'typeorm'
import { Status } from '@entities/Status'
/**
 * @getPhotoRepository get a specific repositor, similar to use a specific schema or table in the database
 */

export async function index() {
  try {
    return await getConnection().getRepository(Status).find()
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
    return await getConnection().getRepository(Status).findOne(id)
  } catch (e) {
    console.error(e.stack)
  }
}

/**
 * @store crete a document an then save that document into db
 * @param  {} payload
 */
export async function store(name, description) {
  try {
    const statusObject = new Status()

    statusObject.name = name
    statusObject.description = description
    statusObject.creationDate = new Date()
    statusObject.modificationDate = new Date()

    // let photo = await getPhotoRepository().create(payload)
    return await getConnection().getRepository(Status).save(statusObject)
  } catch (e) {
    console.error(e.stack)
  }
}

/**
 * @update fetch one document, merge with the old same document and then save it into db
 * @param  {} id
 * @param  {} paypload
 */
export async function update(id, name, description) {
  try {
    let statusObjectToUpdate = await getConnection()
      .getRepository(Status)
      .findOne(id)
    statusObjectToUpdate.name = name
    statusObjectToUpdate.description = description
    statusObjectToUpdate.modificationDate = new Date()
    // let photo = await getPhotoRepository().create(payload)
    return await getConnection()
      .getRepository(Status)
      .save(statusObjectToUpdate)
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
    return await getConnection().getRepository(Status).delete(id)
  } catch (e) {
    console.error(e.stack)
  }
}
