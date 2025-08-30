const fs = require("fs");
const filePath = "data.json";

// ---------- CREATE ----------
function createFile() {
  const initialData = [{ id: 1, name: "Harihar" }];
  fs.writeFileSync(filePath, JSON.stringify(initialData, null, 2));
  console.log("File created with initial data.");
}

// ---------- READ ----------
function readFile() {s
  if (!fs.existsSync(filePath)) {
    console.log("File does not exist.");
    return;
  }
  const data = fs.readFileSync(filePath, "utf-8");
  console.log("File Content:", JSON.parse(data));
}

// ---------- UPDATE ----------
function updateFile(newUser) {
  if (!fs.existsSync(filePath)) {
    console.log("File does not exist.");
    return;
  }
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  data.push(newUser);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log("New user added:", newUser);
}

// ---------- DELETE ----------
function deleteFile() {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log("File deleted.");
  } else {
    console.log("File not found.");
  }
}

// ---------- TEST ----------
createFile(); // C -> Create file with initial data
readFile();   // R -> Read data
updateFile({ id: 2, name: "Pancholi" }); // U -> Add new data
readFile();   // Check updated data
deleteFile(); // D -> Delete file
