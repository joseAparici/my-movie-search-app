import {DateConverter} from '@app/core/converters/date.converter';

describe('DateConverter', () => {
  const dateConverter = new DateConverter();

  describe('serialize', () => {
    it('should return date toISOString if date is not null', () => {
      const date = new Date();
      const result = dateConverter.serialize(date);
      expect(result).toEqual(new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())).toISOString());
    });

    it('should return null if date is not null', () => {
      const result = dateConverter.serialize(null);
      expect(result).toBe(null);
    });
  });

  describe('deserialize', () => {
    it('should return new Date using input if is not null', () => {
      const date = '01/01/01';
      const result = dateConverter.deserialize(date);
      expect(result).toEqual(new Date(date));
    });

    it('should return new Date if date input is null', () => {
      const result = dateConverter.deserialize(null);
      expect(result).toEqual(new Date());
    });
  });
});
