import * as positionServices from '@services/positions.services'

/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */

export async function index(req, res, next) {
  try {
    const positions = await positionServices.index() // call service and store the result in a constant variable
    res.status(200).json(positions) // send status code and json rresponse to the client
  } catch (e) {
    console.error(e.stack)
  }
}

export async function store(req, res, next) {
  try {
    const { name, description } = req.body
    const storedPosition = await positionServices.store(name, description) // call service and store the result in a constant variable
    res.status(200).json(storedPosition) // send status code and joson rresponse to the client
  } catch (e) {
    console.error(e.stack)
  }
}

export async function show(req, res, next) {
  try {
    const position = await positionServices.show(req.params.id) // call service and store the result in a constant variable
    res.status(200).json(position) // send status code and joson rresponse to the client
  } catch (e) {
    console.error(e.stack)
  }
}

export async function update(req, res, next) {
  try {
    const { name, description } = req.body
    const updatedPosition = await positionServices.update(
      req.params.id,
      name,
      description
    ) // call service and store the result in a constant variable
    res.status(200).json(updatedPosition) // send status code and joson rresponse to the client
  } catch (e) {
    console.error(e.stack)
  }
}

export async function destroy(req, res, next) {
  try {
    const destroyedPosition = await positionServices.destroy(req.params.id) // call service and store the result in a constant variable
    res.status(200).json(destroyedPosition) // send status code and joson rresponse to the client
  } catch (e) {
    console.error(e.stack)
  }
}
