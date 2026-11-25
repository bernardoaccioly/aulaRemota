"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_js_1 = require("./modelos/Cliente.js");
const Conta_js_1 = require("./modelos/Conta.js");
const ServicoSaque_js_1 = require("./servicos/ServicoSaque.js");
const notificacoes_1 = require("./notificacoes");
const ana = new Cliente_js_1.Cliente("Ana Souza", "111.111.111-11", "Rua A, 10", 3500, new notificacoes_1.SmsNotificacao());
const joao = new Cliente_js_1.Cliente("João Lima", "222.222.222-22", "Rua B, 20", 5200, new notificacoes_1.EmailNotificacao());
const bia = new Cliente_js_1.Cliente("Bia Reis", "333.333.333-33", "Rua C, 30", 4100, new notificacoes_1.AppNotificacao());
const leo = new Cliente_js_1.Cliente("Leo Alves", "444.444.444-44", "Rua D, 40", 6000, new notificacoes_1.WhatsAppNotificacao());
const cAna1 = new Conta_js_1.Conta("0001-1", "100", 100, 500, ana);
const cAna2 = new Conta_js_1.Conta("0001-2", "100", 2000, 500, ana);
const cJoao = new Conta_js_1.Conta("0002-1", "100", 800, 300, joao);
const cBia = new Conta_js_1.Conta("0003-1", "100", 2000, 1000, bia);
const cLeo = new Conta_js_1.Conta("0004-1", "100", 50, 200, leo);
const cBloq1 = new Conta_js_1.Conta("0005-1", "100", 900, 500, joao);
const cBloq2 = new Conta_js_1.Conta("0006-1", "100", 900, 500, bia);
cBloq1.bloquear();
cBloq2.bloquear();
const servico = new ServicoSaque_js_1.ServicoSaque();
console.log("===== 1) VALOR INVÁLIDO =====");
servico.executar(cAna1, -50);
servico.executar(cJoao, 0);
console.log("\n===== 2) CONTA BLOQUEADA =====");
servico.executar(cBloq1, 100);
servico.executar(cBloq2, 100);
console.log("\n===== 3) SALDO INSUFICIENTE =====");
servico.executar(cAna1, 150);
servico.executar(cLeo, 120);
console.log("\n===== 4) LIMITE DIÁRIO EXCEDIDO =====");
servico.executar(cAna2, 600);
servico.executar(cBia, 400);
servico.executar(cBia, 700);
console.log("\n===== 5) SAQUE COM SUCESSO =====");
servico.executar(cJoao, 200);
servico.executar(cAna2, 300);
console.log("\n===== 6) CANAIS DE NOTIFICAÇÃO (mesmo contrato) =====");
const canais = [
    new notificacoes_1.SmsNotificacao(),
    new notificacoes_1.EmailNotificacao(),
    new notificacoes_1.AppNotificacao(),
    new notificacoes_1.WhatsAppNotificacao(),
];
canais.forEach((c) => c.enviar(ana, "Seu saque foi negado por saldo insuficiente."));
console.log("\n===== 7) ASSOCIAÇÃO Cliente 1..* Conta =====");
ana.contas.forEach((c) => console.log(`   ${ana.nome} possui conta ${c.numero} (saldo R$ ${c.consultarSaldo().toFixed(2)})`));
