export function objectHasProperty(object: object = {}, property: string): boolean {
  return Object.prototype.hasOwnProperty.call(object, property);
}
