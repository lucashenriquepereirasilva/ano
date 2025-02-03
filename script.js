/**
 * Ano automatico
 * @author Lucas henrique
 */

// inserindo o ano da tag<span>

let ano = document.getElementById('copyrigthYear')
// a linha abaixo obtem o ano do sistema
let anoAtual = new Date().getFullYear
// a linha abaixo atrubui o ano a tag <span>
ano.innerHTML = anoAtual