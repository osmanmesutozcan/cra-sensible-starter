import {Resource} from "rest-hooks";

import {URL_ROOT} from "../constants";

/**
 * This is the data shape for imaginary users we have in the app.
 * 
 * We are extending from Resource class here to access to some
 * goodies provided by rest-hooks library.
 * 
 * Extra resources:
 *  - https://resthooks.io/docs/api/resource
 */
export class ManagedUser extends Resource {
  readonly id: number | null = null;
  readonly username: string = "";
  readonly password: string = "";

  pk() { return this.id; }

  static urlRoot = `${URL_ROOT}/pinterest/users/list`;
}
