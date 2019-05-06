import {Serializer} from '@app/core/services/serializer';
import {GenreImp} from '@app/movie/model/genre.imp';

describe('Serializer', () => {
  const serializer = new Serializer();
  let mocks: any;

  beforeEach(() => {
    loadMocks();
  });

  describe('deserialize', () => {
    it('should deserialize json object to model', () => {
      const genreInstance = serializer.deserialize(mocks.genreJson, GenreImp);
      expect(genreInstance instanceof GenreImp).toBe(true);
    });
  });

  function loadMocks() {
    mocks = {
      genreJson: {id: 1, name: 'genre1'}
    };
  }
});
