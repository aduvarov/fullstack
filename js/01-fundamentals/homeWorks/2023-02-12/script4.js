'use strict';

document.write('<table border="1" width="500" height="500" align="center">');
for (let cell = 1; cell <= 9; cell++) {
    document.write('<td align="center">');
    for (let example = 1; example <= 9; example++) {
        document.write(cell + ' x ' + example + ' = ' + cell * example);
        document.write('<br>');
    }
    if (cell % 3 === 0) {
        document.write('</tr>' + '<tr>');
    }
}
document.write('</tr>');
