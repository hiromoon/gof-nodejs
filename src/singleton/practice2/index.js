import Triple from './Triple';

const num1 = Triple.getInstance(0);
const num2 = Triple.getInstance(1);
const num3 = Triple.getInstance(2);

process.stdout.write(`Number1 :${num1.id}\n`);
process.stdout.write(`Number2 :${num2.id}\n`);
process.stdout.write(`Number3 :${num3.id}\n`);
