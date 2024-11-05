const fs = require('fs');

// Write content to a new file 'file.js'
fs.writeFile('file.js', 'this is the content of the file when created', 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('file created');
});

// Create a new directory named 'kkla'
fs.mkdir('kkla', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('directory created');
});

// Read and log the content of 'file.js'
fs.readFile('file.js', 'utf8', (err, data) => {
  if (err) {
    console.error("kikila ", err);
    return;
  }
  console.log(data);
});

// Append text to 'file.js'
fs.appendFile('file.js', ' this is the appended text ...', 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
});

// Read and log the content of 'file.js'
fs.readFile('file.js', 'utf8', (err, data) => {
  if (err) {
    console.error("kikila ", err);
    return;
  }
  console.log(data);
});


// Append two lines to 'file.js'
fs.appendFile('file.js', '\nthis is the first new line\nthis is the second new line', 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
});

// Read and log the content of 'file.js'
fs.readFile('file.js', 'utf8', (err, data) => {
  if (err) {
    console.error("kikila ", err);
    return;
  }
  console.log(data);
});

// Function to delete the last line of a file
const deleteLastLine = (filePath) => {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const lines = fileContent.split('\n');
    lines.pop(); // Remove the last line
    fs.writeFileSync(filePath, lines.join('\n'));
  } catch (error) {
    console.error('Error reading or writing file:', error);
  }
};

// Delete the last line of 'file.js'
deleteLastLine('file.js');

// Read and log the content of 'file.js'
fs.readFile('file.js', 'utf8', (err, data) => {
  if (err) {
    console.error("kikila ", err);
    return;
  }
  console.log(data);
});

// Rename a file from 'fisier1.txt' to 'fisier2.txt'
fs.rename('file.js', 'file2.js', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('fisier redenumit');
});

// PowerShell command to rename a file
// rename-item -path "file2.js" -newname "file.js"

