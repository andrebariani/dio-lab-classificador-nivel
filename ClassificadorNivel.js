const levels = new Map([
    ['Ferro',  0 ],
    ['Bronze',  1001 ],
    ['Prata',  2001 ],
    ['Ouro',  5001 ],
    ['Platina',  7001 ],
    ['Ascendente',  8001 ],
    ['Imortal',  9001 ],
    ['Radiante',  10000 ]
]);

const name = 'John Johnman'
// const xp = Math.floor(Math.random() * 11000)
const xp = 1000
let currentLevel = ''

for (let [level, range] of levels.entries()) {
    if (xp >= range) {
        currentLevel = level
    }
}

console.log(`O Herói de nome **${name}** está no nível de **${currentLevel}** (${xp})`)