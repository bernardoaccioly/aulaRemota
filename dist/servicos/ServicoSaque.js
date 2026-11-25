"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicoSaque = void 0;
const excecoes_1 = require("../excecoes");
class ServicoSaque {
    executar(conta, valor) {
        const cliente = conta.titular;
        console.log(`\n▶ ${cliente.nome} tenta sacar R$ ${valor.toFixed(2)} ` +
            `(conta ${conta.numero}, saldo R$ ${conta.consultarSaldo().toFixed(2)})`);
        try {
            conta.sacar(valor);
            console.log(`    Saque realizado. Novo saldo: R$ ${conta.consultarSaldo().toFixed(2)}`);
        }
        catch (e) {
            if (e instanceof excecoes_1.SaqueException) {
                console.log(`    ${e.name}`);
                // Polimorfismo: só conhece o contrato, não o canal concreto.
                cliente.canalPreferido.enviar(cliente, e.message);
            }
            else {
                throw e; // erro inesperado não é tratado aqui
            }
        }
    }
}
exports.ServicoSaque = ServicoSaque;
