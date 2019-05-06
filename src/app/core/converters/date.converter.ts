import {JsonConverter, JsonCustomConvert} from 'json2typescript';

@JsonConverter
export class DateConverter implements JsonCustomConvert<Date> {
  serialize(date: Date): any {
    const d = date ? new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())) : null;
    return d ? d.toISOString() : null;
  }

  deserialize(date: any) {
    return date ? new Date(date) : new Date();
  }
}

