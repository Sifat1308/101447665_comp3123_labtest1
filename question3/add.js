// add.js
const fs = require('fs');
const path = require('path');
const logsDir = path.join(__dirname, 'Logs');
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}
process.chdir(logsDir);

for (let i = 0; i < 10; i++) {
    const name = `log${i}.txt`;
    fs.writeFileSync(name, `Log file ${i}`);
    console.log(name); 
}
