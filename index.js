var recipes = { pizza: 'cheese' }

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, { [key]: value })
}

function deleteFromObjectByKey(object, key) {
  Object.assign({}, object)
  return delete object[key]
}

function destructivelyDeleteFromObjectByKey(object, key) {

}
