import * as statusObjectServices from '@services/status.services'

/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */

export async function index(req, res, next) {
  try {
    const statusObjects = await statusObjectServices.index() // call service and store the result in a constant variable
    res.status(200).json(statusObjects) // send status code and json rresponse to the client
  } catch (e) {
    console.error(e.stack)
  }
}

export async function store(req, res, next) {
  try {
    const { name, description } = req.body
    const storedStatusObject = await statusObjectServices.store(
      name,
      description
    ) // call service and store the result in a constant variable
    res.status(200).json(storedStatusObject) // send status code and joson rresponse to the client
  } catch (e) {
    console.error(e.stack)
  }
}

export async function show(req, res, next) {
  try {
    const statusObject = await statusObjectServices.show(req.params.id) // call service and store the result in a constant variable
    res.status(200).json(statusObject) // send status code and joson rresponse to the client
  } catch (e) {
    console.error(e.stack)
  }
}

export async function update(req, res, next) {
  try {
    const { name, description } = req.body
    const updatedStatusObject = await statusObjectServices.update(
      req.params.id,
      name,
      description
    ) // call service and store the result in a constant variable
    res.status(200).json(updatedStatusObject) // send status code and joson rresponse to the client
  } catch (e) {
    console.error(e.stack)
  }
}

export async function destroy(req, res, next) {
  try {
    const destroyedStatusObject = await statusObjectServices.destroy(
      req.params.id
    ) // call service and store the result in a constant variable
    res.status(200).json(destroyedStatusObject) // send status code and joson rresponse to the client
  } catch (e) {
    console.error(e.stack)
  }
}
