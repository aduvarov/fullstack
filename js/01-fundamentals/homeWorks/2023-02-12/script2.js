'use strict';

// document.write('<table border="1">');
// for (let tableRow = 0; tableRow <= 9; tableRow++) {
//     if (tableRow <= 9) {
//         document.write('<tr><td>' + tableRow + '</td>');
//         for (let tableData = 1; tableData <= 9; tableData++) {
//             if (tableData <= 9) {
//                 document.write('<td>' + tableData + '</td>');
//             }
//         }
//         document.write('</tr>');
//     }
// }

document.write('<table border="1">');
for (let tableRow = 1; tableRow <= 9; tableRow++) {
    for (let tableData = 1; tableData <= 9; tableData++) {
        document.write('<td>' + tableRow + ' x ' + tableData + ' = ' + tableData * tableRow + '</td>');
    }
    document.write('</tr>');
}
