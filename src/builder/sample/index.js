import HTMLBuilder from './HTMLBuilder';
import TextBuilder from './TextBuilder';
import Director from './Director';

function usage() {
  process.stdout.write('Usage: plain Create document by plain text\n');
  process.stdout.write('Usage: html Create document by html file\n');
}

if (process.argv.length !== 3) {
  process.stdout.write('Please input plain or html');
  usage();
  process.exit(1);
}

if (process.argv[2] === 'plain') {
  const textBuilder = new TextBuilder();
  const director = new Director(textBuilder);
  director.construct();
  const result = textBuilder.getResult();
  process.stdout.write(result);
} else if (process.argv[2] === 'html') {
  const htmlBuilder = new HTMLBuilder();
  const director = new Director(htmlBuilder);
  director.construct();
  const result = htmlBuilder.getResult();
  process.stdout.write(`${result} is Created.`);
} else {
  process.stdout.write('Please input plain or html');
  usage();
  process.exit(1);
}
