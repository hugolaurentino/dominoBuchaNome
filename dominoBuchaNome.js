const ladoA = 7
const ladoB = 7

console.log(`
${ladoA < 7 && ladoB < 7 ? ladoA === ladoB ? 'SIM' : 'NÃO' : 'NÃO existe'}
${ladoA < 7 && ladoB < 7 ? ladoA === ladoB && ladoA === 0 ? 'BUCHA DE BRANCO' :
        ladoA === ladoB && ladoA === 1 ? 'BUCHA DE ÁS' :
            ladoA === ladoB && ladoA === 2 ? 'BUCHA DE DUQUE' :
                ladoA === ladoB && ladoA === 3 ? 'BUCHA DE TERNO' :
                    ladoA === ladoB && ladoA === 4 ? 'BUCHA DE QUADRA' :
                        ladoA === ladoB && ladoA === 5 ? 'BUCHA DE QUINA' :
                            ladoA === ladoB && ladoA === 6 ? 'BUCHA DE SENA' :
                                'NÃO E BUCHA' : 'NÃO EXISTE'
    }
`);