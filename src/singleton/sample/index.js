import Singleton from './Singleton';

process.stdout.write('Start\n');
const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();
if (obj1 === obj2) {
  process.stdout.write('Equals\n');
} else {
  process.stdout.write('Not Equals\n');
}
process.stdout.write('End\n');
