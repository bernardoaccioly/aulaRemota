import type { CanalNotificacao } from "../notificacoes/CanalNotificacao.js";
import type { Conta } from "./Conta.js";

export class Cliente {
  private readonly _contas: Conta[] = [];

  constructor(
    private readonly _nome: string,
    private readonly _cpf: string,
    private _endereco: string,
    private _renda: number,
    private _canalPreferido: CanalNotificacao
  ) {}

  /** Usado pela Conta ao ser criada (associação 1 cliente -> 1..* contas). */
  adicionarConta(conta: Conta): void {
    this._contas.push(conta);
  }

  get nome(): string { return this._nome; }
  get cpf(): string { return this._cpf; }
  get endereco(): string { return this._endereco; }
  get renda(): number { return this._renda; }
  get canalPreferido(): CanalNotificacao { return this._canalPreferido; }
  set canalPreferido(canal: CanalNotificacao) { this._canalPreferido = canal; }
  get contas(): readonly Conta[] { return this._contas; }
}