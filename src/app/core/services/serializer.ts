import {JsonConvert, OperationMode, ValueCheckingMode} from 'json2typescript';

export class Serializer {

  protected jsonConvert: JsonConvert;

  constructor() {
    this.jsonConvert = new JsonConvert();
    this.jsonConvert.operationMode = OperationMode.ENABLE;
    this.jsonConvert.ignorePrimitiveChecks = false;
    this.jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL;
  }

  deserialize<T>(json: any, type: any): T[] | T {
    return this.jsonConvert.deserialize(json, type);
  }
}
