const levels = new Map([
    ['Ferro',  10 ],
    ['Bronze',  20 ],
    ['Prata',  50 ],
    ['Ouro',  80 ],
    ['Diamante',  90 ],
    ['Lendário',  100 ]
]);

function getSaldo(vitorias, derrotas) {
    return vitorias - derrotas
}

// const vitorias = Math.floor(Math.random() * 100)
// const derrotas = Math.floor(Math.random() * 100)

const vitorias = 100
const derrotas = 0

const saldoVitorias = getSaldo(vitorias, derrotas)

let currentLevel = 'Imortal'

for (let [level, range] of levels.entries()) {
    if (saldoVitorias <= range) {
        currentLevel = level
        break
    }
}

console.log(`O Herói tem de saldo de **${saldoVitorias}** está no nível de **${currentLevel}**`)