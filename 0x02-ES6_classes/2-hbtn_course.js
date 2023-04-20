export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(name) {
    if (typeof (name) !== 'string') {
      throw new TypeError('Not a string');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set length(length) {
    if (typeof (length) !== 'number') {
      throw new TypeError('Not a Number');
    }
    this._length = length;
  }

  get length() {
    return this._length;
  }

  set students(students) {
    if (!(students instanceof Array)) {
      throw new TypeError('Not an array');
    }
    this._students = students;
  }

  get students() {
    return this._students;
  }
}
