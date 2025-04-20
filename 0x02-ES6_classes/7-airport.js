export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('code nust be a number');
    }
    this._code = code;
  }

  get code() {
    return this._code;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('name nust be a number');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get [Symbol.toStringTag]() {
    return this.code;
  }
}
