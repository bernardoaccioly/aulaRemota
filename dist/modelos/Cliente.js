"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(_nome, _cpf, _endereco, _renda, _canalPreferido) {
        this._nome = _nome;
        this._cpf = _cpf;
        this._endereco = _endereco;
        this._renda = _renda;
        this._canalPreferido = _canalPreferido;
        this._contas = [];
    }
    /** Usado pela Conta ao ser criada (associação 1 cliente -> 1..* contas). */
    adicionarConta(conta) {
        this._contas.push(conta);
    }
    get nome() { return this._nome; }
    get cpf() { return this._cpf; }
    get endereco() { return this._endereco; }
    get renda() { return this._renda; }
    get canalPreferido() { return this._canalPreferido; }
    set canalPreferido(canal) { this._canalPreferido = canal; }
    get contas() { return this._contas; }
}
exports.Cliente = Cliente;
