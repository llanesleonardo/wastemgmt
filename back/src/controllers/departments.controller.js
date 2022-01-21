import * as departmentsServices from '@services/departments.services'

/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */

export async function index(req, res, next) {
  try {
    const departments = await departmentsServices.index() // call service and store the result in a constant variable
    res.status(200).json(departments) // send status code and json rresponse to the client
  } catch (e) {
    console.error(e.stack)
  }
}

export async function store(req, res, next) {
  try {
    const { name, description } = req.body
    const storedDepartment = await departmentsServices.store(name, description) // call service and store the result in a constant variable
    res.status(200).json(storedDepartment) // send status code and joson rresponse to the client
  } catch (e) {
    console.error(e.stack)
  }
}

export async function show(req, res, next) {
  try {
    const department = await departmentsServices.show(req.params.id) // call service and store the result in a constant variable
    res.status(200).json(department) // send status code and joson rresponse to the client
  } catch (e) {
    console.error(e.stack)
  }
}

export async function update(req, res, next) {
  try {
    const { name, description } = req.body
    const updatedDepartment = await departmentsServices.update(
      req.params.id,
      name,
      description
    ) // call service and store the result in a constant variable
    res.status(200).json(updatedDepartment) // send status code and joson rresponse to the client
  } catch (e) {
    console.error(e.stack)
  }
}

export async function destroy(req, res, next) {
  try {
    const destroyedDepartment = await departmentsServices.destroy(req.params.id) // call service and store the result in a constant variable
    res.status(200).json(destroyedDepartment) // send status code and joson rresponse to the client
  } catch (e) {
    console.error(e.stack)
  }
}
