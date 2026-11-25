"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsNotificacao = void 0;
class SmsNotificacao {
    enviar(cliente, mensagem) {
        const curta = mensagem.length > 160 ? mensagem.substring(0, 157) + "..." : mensagem;
        console.log(`    [SMS para ${cliente.nome}] ${curta}`);
    }
}
exports.SmsNotificacao = SmsNotificacao;
