"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppNotificacao = void 0;
class AppNotificacao {
    enviar(cliente, mensagem) {
        console.log(`    [PUSH imediato para ${cliente.nome}] ${mensagem}`);
    }
}
exports.AppNotificacao = AppNotificacao;
