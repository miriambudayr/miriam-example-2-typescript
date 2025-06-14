// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { MiriamExample2 } from '../client';

export abstract class APIResource {
  protected _client: MiriamExample2;

  constructor(client: MiriamExample2) {
    this._client = client;
  }
}
