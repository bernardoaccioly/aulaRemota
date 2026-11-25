import { SaqueException } from "./SaqueException.js";

export class ContaBloqueadaException extends SaqueException {
  constructor(numeroConta: string) {
    super(`Conta ${numeroConta} bloqueada. Procure a cooperativa para regularizar.`);
  }
}