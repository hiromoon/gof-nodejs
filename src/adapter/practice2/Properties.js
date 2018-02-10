export default class Properties {
  constructor() {
    this.map = new Map();
  }
  load(input) {
    const datas = input.toString();
    const lines = datas.split('\n');
    for (const l of lines) {
      const result = /([a-zA-Z0-9]+)=([a-zA-Z0-9]+)/.exec(l);
      if (result) {
        this.map.set(result[1], result[2]);
      }
    }
  }
  store(out, header) {
    const datas = [header];
    for (const e of this.map) {
      datas.push(`${e[0]}=${e[1]}`);
    }
    out.write(datas.join('\n'));
    return out;
  }
  setValue(key, value) {
    this.map.set(key, value);
  }
  getValue(key) {
    this.map.get(key);
  }
}
