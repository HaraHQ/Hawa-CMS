import { describe, it, expect, jest } from '@jest/globals';

describe('checkDB function', () => {
  it('should return the database from config if it exists', () => {
    jest.isolateModules(() => {
      // Mock the config file
      jest.doMock('../../config.json', () => ({
        database: 'prisma',
        dbs: [
          {
            id: 'prisma',
            host: 'mongodb://localhost:27017/prisma',
            user: 'user',
            pass: 'pass'
          }
        ]
      }));

      // Now use import after the mock inside isolateModules
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const checkDB = require('../libs/checkDb').default;

      const result = checkDB();
      expect(result).toStrictEqual({
        id: 'prisma',
        host: 'mongodb://localhost:27017/prisma',
        user: 'user',
        pass: 'pass'
      });
    });
  });

  it('should return null if no database is present in config', () => {
    jest.isolateModules(() => {
      // Mock the config file with null database
      jest.doMock('../../config.json', () => ({
        database: null
      }));

      // Import after the mock inside isolateModules
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const checkDB = require('../libs/checkDb').default;

      const result = checkDB();
      expect(result).toBeNull();
    });
  });
});
