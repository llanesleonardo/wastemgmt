import { getRepository, getConnection } from 'typeorm'
import { Position } from '@entities/Position'
/**
 * @getPhotoRepository get a specific repositor, similar to use a specific schema or table in the database
 */

export async function index() {
  try {
    return await getConnection().getRepository(Position).find()
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
    return await getConnection().getRepository(Position).findOne(id)
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
    const position = new Position()

    position.name = name
    position.description = description
    position.creationDate = new Date()
    position.modificationDate = new Date()

    // let photo = await getPhotoRepository().create(payload)
    return await getConnection().getRepository(Position).save(position)
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
    let positionToUpdate = await getConnection()
      .getRepository(Position)
      .findOne(id)
    positionToUpdate.name = name
    positionToUpdate.description = description
    positionToUpdate.modificationDate = new Date()
    // let photo = await getPhotoRepository().create(payload)
    return await getConnection().getRepository(Position).save(positionToUpdate)
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
    return await getConnection().getRepository(Position).delete(id)
  } catch (e) {
    console.error(e.stack)
  }
}
