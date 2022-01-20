import * as companiesServices from '@services/companies.services'

/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */

export async function index(req, res, next) {
  try {
    const companies = await companiesServices.index() // call service and store the result in a constant variable
    res.status(200).json(companies) // send status code and json rresponse to the client
  } catch (e) {
    console.error(e.stack)
  }
}

export async function store(req, res, next) {
  try {
    const {
      name,
      email,
      active,
      status,
      address,
      city,
      state,
      country,
      numUsers
    } = req.body
    const storedCompany = await companiesServices.store(
      name,
      email,
      active,
      status,
      address,
      city,
      state,
      country,
      numUsers
    ) // call service and store the result in a constant variable
    res.status(200).json(storedCompany) // send status code and joson rresponse to the client
  } catch (e) {
    console.error(e.stack)
  }
}

export async function show(req, res, next) {
  try {
    const company = await companiesServices.show(req.params.id) // call service and store the result in a constant variable
    res.status(200).json(company) // send status code and joson rresponse to the client
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
      department,
      area,
      position,
      mobile,
      active,
      urlPhoto,
      company
    } = req.body
    const updatedCompany = await companiesServices.update(
      req.params.id,
      name,
      lastname,
      email,
      department,
      area,
      position,
      mobile,
      active,
      urlPhoto,
      company
    ) // call service and store the result in a constant variable
    res.status(200).json(updatedCompany) // send status code and joson rresponse to the client
  } catch (e) {
    console.error(e.stack)
  }
}

export async function updateEmployeeUserRelation(req, res, next) {
  try {
    const { userId } = req.body
    const updatedCompany = await companiesServices.updateEmployeeUserRelation(
      req.params.id,
      userId
    ) // call service and store the result in a constant variable
    res.status(200).json(updatedCompany) // send status code and joson rresponse to the client
  } catch (e) {
    console.error(e.stack)
  }
}

export async function destroy(req, res, next) {
  try {
    const destroyedCompany = await companiesServices.destroy(req.params.id) // call service and store the result in a constant variable
    res.status(200).json(destroyedCompany) // send status code and joson rresponse to the client
  } catch (e) {
    console.error(e.stack)
  }
}
