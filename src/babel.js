async function start() {
    return await Promise.resolve('c');
}
start().then(console.log)

class Util {
    static id = Date.now();
}
console.log('Util', Util.id)

const un = 42

import('lodash').then(_ => {
    console.log('Lodash', _.random(0, 23, true))
})