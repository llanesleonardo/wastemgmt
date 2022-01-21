import { getRepository, getConnection } from 'typeorm'
import { Company } from '@entities/Company'
/**
 * @getPhotoRepository get a specific repositor, similar to use a specific schema or table in the database
 */

export async function index() {
  try {
    return await getConnection().getRepository(Company).find()
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
    return await getConnection().getRepository(Company).findOne(id)
  } catch (e) {
    console.error(e.stack)
  }
}

/**
 * @store crete a document an then save that document into db
 * @param  {} payload
 */
export async function store(
  name,
  email,
  active,
  status,
  address,
  city,
  state,
  country,
  numUsers
) {
  try {
    const company = new Company()

    company.name = name
    company.email = email
    company.active = active
    company.status = status
    company.address = address
    company.city = city
    company.state = state
    company.country = country
    company.numUsers = numUsers
    company.creationDate = new Date()
    company.modificationDate = new Date()
    company.activationDate = null
    // let photo = await getPhotoRepository().create(payload)
    return await getConnection().getRepository(Company).save(company)
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
  name,
  email,
  active,
  status,
  address,
  city,
  state,
  country,
  numUsers
) {
  try {
    let companyToUpdate = await getConnection()
      .getRepository(Company)
      .findOne(id)

    companyToUpdate.name = name
    companyToUpdate.email = email
    companyToUpdate.active = active
    companyToUpdate.status = status
    companyToUpdate.address = address
    companyToUpdate.city = city
    companyToUpdate.state = state
    companyToUpdate.country = country
    companyToUpdate.numUsers = numUsers
    companyToUpdate.modificationDate = new Date()
    companyToUpdate.activationDate = new Date()

    return await getConnection().getRepository(Company).save(companyToUpdate)
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
    return await getConnection().getRepository(Company).delete(id)
  } catch (e) {
    console.error(e.stack)
  }
}
