import Manager from './framework/Manager';
import UnderlinePen from './UnderlinePen';
import MessageBox from './MessageBox';

const manager = new Manager();
const upen = new UnderlinePen('~');
const mbox = new MessageBox('*');
const sbox = new MessageBox('/');

manager.register('strong message', upen);
manager.register('warning box', mbox);
manager.register('slash box', sbox);

const p1 = manager.create('strong message');
p1.use('Hello, world.');
const p2 = manager.create('warning box');
p2.use('Hello, world.');
const p3 = manager.create('slash box');
p3.use('Hello, world.');
