var Util = require("./util");

module.exports = {
  gerarFaturaStr(fatura, calc) {
    let faturaStr = `Fatura ${fatura.cliente}\n`;

    for (let apresentacao of fatura.apresentacoes) {
      faturaStr += `  ${
        calc.repo.getPeca(apresentacao).nome
      }: ${Util.formatarMoeda(calc.calcularTotalApresentacao(apresentacao))} (${
        apresentacao.audiencia
      } assentos)\n`;
    }
    faturaStr += `Valor total: ${Util.formatarMoeda(
      calc.calcularTotalFatura(fatura.apresentacoes)
    )}\n`;
    faturaStr += `Créditos acumulados: ${calc.calcularTotalCreditos(
      fatura.apresentacoes
    )} \n`;
    return faturaStr;
  },
};