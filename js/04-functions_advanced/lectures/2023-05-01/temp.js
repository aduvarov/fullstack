// lexEnv_script = {
//     parent: null,
//     sumPlusX: 'function 20',
//     sumPlusY: 'function 21',
//     summa: 15,
// };

// lexEnv_sumPlusX = {
//     parent: lexEnv_script,
//     x: 5,
// };

// lexEnv_sumPlusY = {
//     parent: lexEnv_sumPlusX,
//     y: 10,
// };
/////////////////////////////////////
// lexEnv_script = {
//     parent: null,
//     greetUser: 'function 27',
//     greetMisha: 'function 28',
// };

// lexEnv_greetUser = {
//     parent: lexEnv_script,
//     greet: 'Hello',
// };

// lexEnv_greetMisha = {
//     parent: lexEnv_greetUser,
//     username: 'Misha',
// };
//////////////////////////////

lexEnv_Script = {
    parent: null,
    makeCounter: 'function 38',
    counter: 'function 40',
    counter2: 'function 40',
};

// Замкнутое окружение...Closure
lexEnv_makeCounter = {
    parent: lexEnv_Script,
    count: 1,
};
// Замкнутое окружение...Closure

// Замкнутое окружение...Closure
lexEnv_makeCounter2 = {
    parent: lexEnv_Script,
    count: 0,
};
// Замкнутое окружение...Closure
