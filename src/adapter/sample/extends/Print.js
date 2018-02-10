export default Base =>
  class Print extends Base {
    printWeak() {
      throw new Error('printWeak method is Unimplemented.');
    }
    printStrong() {
      throw new Error('printStrong method is Unimplemented.');
    }
  };
