import fs from 'fs';
import FileIO from './FileIO';
import Properties from './Properties';

export default class FileProperties extends FileIO {
  constructor() {
    super();
    this.properties = new Properties();
  }
  readFromFile(fileName) {
    const f = fs.readFileSync(fileName);
    this.properties.load(f);
  }
  writeToFile(fileName) {
    const header = `#written by FileProperties
#${Date.now().toString()}
`;
    const buf = this.properties.store(Buffer.alloc(128), header);
    fs.writeFileSync(fileName, buf.toString());
  }
  setValue(key, value) {
    this.properties.setValue(key, value);
  }
  getValue(key) {
    this.properties.getValue(key);
  }
}
