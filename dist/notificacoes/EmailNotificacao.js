"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailNotificacao = void 0;
class EmailNotificacao {
    enviar(cliente, mensagem) {
        console.log(`    [E-MAIL para ${cliente.nome}]`);
        console.log(`      Assunto: Aviso sobre sua operação`);
        console.log(`      Prezado(a) ${cliente.nome},`);
        console.log(`      ${mensagem}`);
        console.log(`      Atenciosamente, Cooperativa de Crédito.`);
    }
}
exports.EmailNotificacao = EmailNotificacao;
