const fs = require('fs');
const path = require('path');
const { stdout, stdin } = process;

fs.writeFile(
    path.join(__dirname, 'text.txt'),
    ' ',
    (err) => {
        if (err) throw err;
    }
);


stdout.write('Введите текст\n');

stdin.on('data', data => {
    fs.appendFile(
        path.join(__dirname, 'text.txt'),
        `${data}`,

        process.stdin.on('data', data => {
            const dataString = data.toString()
             if (dataString === 'exit\n') {
                 console.log('Программа завершена');
                 process.exit();
             }
           }),

        err => {
            if (err) throw err;
        }
    );
}
);

process.on('SIGINT', () => {
    console.log('Программа завершена');
    process.exit();
  });

