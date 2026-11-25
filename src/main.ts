import { Cliente } from "./modelos/Cliente.js";
import { Conta } from "./modelos/Conta.js";
import { ServicoSaque } from "./servicos/ServicoSaque.js";
import {
  CanalNotificacao,
  SmsNotificacao,
  EmailNotificacao,
  AppNotificacao,
  WhatsAppNotificacao,
} from "./notificacoes";

const ana  = new Cliente("Ana Souza", "111.111.111-11", "Rua A, 10", 3500, new SmsNotificacao());
const joao = new Cliente("João Lima", "222.222.222-22", "Rua B, 20", 5200, new EmailNotificacao());
const bia  = new Cliente("Bia Reis",  "333.333.333-33", "Rua C, 30", 4100, new AppNotificacao());
const leo  = new Cliente("Leo Alves", "444.444.444-44", "Rua D, 40", 6000, new WhatsAppNotificacao());

const cAna1  = new Conta("0001-1", "100", 100,  500,  ana);
const cAna2  = new Conta("0001-2", "100", 2000, 500,  ana);
const cJoao  = new Conta("0002-1", "100", 800,  300,  joao);
const cBia   = new Conta("0003-1", "100", 2000, 1000, bia);
const cLeo   = new Conta("0004-1", "100", 50,   200,  leo);
const cBloq1 = new Conta("0005-1", "100", 900,  500,  joao);
const cBloq2 = new Conta("0006-1", "100", 900,  500,  bia);
cBloq1.bloquear();
cBloq2.bloquear();

const servico = new ServicoSaque();

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
const canais: CanalNotificacao[] = [
  new SmsNotificacao(),
  new EmailNotificacao(),
  new AppNotificacao(),
  new WhatsAppNotificacao(),
];
canais.forEach((c) => c.enviar(ana, "Seu saque foi negado por saldo insuficiente."));

console.log("\n===== 7) ASSOCIAÇÃO Cliente 1..* Conta =====");
ana.contas.forEach((c) =>
  console.log(`   ${ana.nome} possui conta ${c.numero} (saldo R$ ${c.consultarSaldo().toFixed(2)})`)
);