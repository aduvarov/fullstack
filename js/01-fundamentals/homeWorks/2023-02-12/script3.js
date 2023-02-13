'use strict';

for (let line = 1; line <= 10; line++) {
    for (let lineContent1 = 1; lineContent1 <= line; lineContent1++) {
        document.write('*');
    }
    document.write('<br>');
}
for (let line2 = 9; line2 >= 1; line2--) {
    for (let lineContent2 = line2; lineContent2 >= 1; lineContent2--) {
        document.write('*');
    }
    document.write('<br>');
}
