"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsAppNotificacao = void 0;
/** Extensão futura: nenhuma outra classe do sistema precisa mudar. */
class WhatsAppNotificacao {
    enviar(cliente, mensagem) {
        console.log(`    [WhatsApp para ${cliente.nome}] ${mensagem}`);
    }
}
exports.WhatsAppNotificacao = WhatsAppNotificacao;
