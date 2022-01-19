import * as employeesServices from '@services/employees.services'

/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */

export async function index(req, res, next) {
  try {
    const employees = await employeesServices.index() // call service and store the result in a constant variable
    res.status(200).json(employees) // send status code and json rresponse to the client
  } catch (e) {
    console.error(e.stack)
  }
}

export async function store(req, res, next) {
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
    const storedEmployee = await employeesServices.store(
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
    res.status(200).json(storedEmployee) // send status code and joson rresponse to the client
  } catch (e) {
    console.error(e.stack)
  }
}

export async function show(req, res, next) {
  try {
    const employee = await employeesServices.show(req.params.id) // call service and store the result in a constant variable
    res.status(200).json(employee) // send status code and joson rresponse to the client
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
    const updatedEmployee = await employeesServices.update(
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
    res.status(200).json(updatedEmployee) // send status code and joson rresponse to the client
  } catch (e) {
    console.error(e.stack)
  }
}

export async function updateEmployeeUserRelation(req, res, next) {
  try {
    const { userId } = req.body
    const updatedEmployee = await employeesServices.updateEmployeeUserRelation(
      req.params.id,
      userId
    ) // call service and store the result in a constant variable
    res.status(200).json(updatedEmployee) // send status code and joson rresponse to the client
  } catch (e) {
    console.error(e.stack)
  }
}

export async function destroy(req, res, next) {
  try {
    const destroyedEmployee = await employeesServices.destroy(req.params.id) // call service and store the result in a constant variable
    res.status(200).json(destroyedEmployee) // send status code and joson rresponse to the client
  } catch (e) {
    console.error(e.stack)
  }
}
