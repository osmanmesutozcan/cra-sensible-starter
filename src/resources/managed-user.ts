import {Resource} from "rest-hooks";

import {URL_ROOT} from "../constants";

export class ManagedUser extends Resource {
  readonly id: number | null = null;
  readonly username: string = "";
  readonly password: string = "";

  pk() { return this.id; }

  static urlRoot = `${URL_ROOT}/pinterest/users/list`;
}
