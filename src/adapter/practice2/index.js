import FileProperties from "./FileProperties";

const f = new FileProperties();
try {
  f.readFromFile("file.txt");
  f.setValue("year", "2004");
  f.setValue("month", "4");
  f.setValue("day", "21");
  f.writeToFile("newfile.txt");
} catch (err) {
  throw err;
}
