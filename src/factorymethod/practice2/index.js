import IDCardFactory from './idcard/IDCardFactory';

const factory = new IDCardFactory();
const card1 = factory.create('Alice');
const card2 = factory.create('Bob');
const card3 = factory.create('Charlie');

card1.use();
card2.use();
card3.use();
