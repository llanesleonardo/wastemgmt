import { getRepository, getConnection } from 'typeorm'
import { Department } from '@entities/Department'
/**
 * @getPhotoRepository get a specific repositor, similar to use a specific schema or table in the database
 */

export async function index() {
  try {
    return await getConnection().getRepository(Department).find()
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
    return await getConnection().getRepository(Department).findOne(id)
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
    const department = new Department()

    department.name = name
    department.description = description
    department.creationDate = new Date()
    department.modificationDate = new Date()

    // let photo = await getPhotoRepository().create(payload)
    return await getConnection().getRepository(Department).save(department)
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
    let departmentToUpdate = await getConnection()
      .getRepository(Department)
      .findOne(id)
    departmentToUpdate.name = name
    departmentToUpdate.description = description
    departmentToUpdate.modificationDate = new Date()
    // let photo = await getPhotoRepository().create(payload)
    return await getConnection()
      .getRepository(Department)
      .save(departmentToUpdate)
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
    return await getConnection().getRepository(Department).delete(id)
  } catch (e) {
    console.error(e.stack)
  }
}
