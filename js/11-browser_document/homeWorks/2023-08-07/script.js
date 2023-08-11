'use strict';
let robot1 = {
    name: 'Rocky',
    health: 100,
    speed: 20,
    tactics: ['punch', 'punch', 'laser', 'missile', 'punch', 'punch'],
};
let robot2 = {
    name: 'Missile Bob',
    health: 100,
    speed: 21,
    tactics: ['missile', 'missile', 'missile', 'missile'],
};
let tactics = {
    punch: 20,
    laser: 30,
    missile: 35,
};

function fight(robot1, robot2, tactics) {
    let first = robot1.speed > robot2.speed ? robot1 : robot2;
    let second = robot1.speed > robot2.speed ? robot2 : robot1;
    let tacticsLength = robot1.tactics.length + robot2.tactics.length;
    for (let i = 0; i < tacticsLength; i++) {
        if (robot1.health <= 0 || robot2.health <= 0) {
            if (robot1.health >= robot2.health) {
                return console.log(robot1.name);
            } else {
                return console.log(robot2.name);
            }
        }
        attack(first, second, tactics);
        attack(second, first, tactics);
    }

    return console.log('Ничья!');
}

function attack(first, second, tactics) {
    if (first.tactics.length > 0) {
        let nameTactic = '';
        nameTactic = first.tactics[0];
        first.tactics.shift();
        let damage = tactics[`${nameTactic}`];
        second.health = second.health - damage;
    }
}
fight(robot1, robot2, tactics);
