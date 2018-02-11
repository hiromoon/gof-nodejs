const singleton = new class {
  constructor() {
    process.stdout.write('Created instance.\n');
  }
}();
export default class Singleton {
  constructor() {
    throw new Error('Singleton constructor call is forbidden.');
  }
  static getInstance() {
    return singleton;
  }
}
