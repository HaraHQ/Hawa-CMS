import { describe, it, expect, jest } from '@jest/globals';

describe('Load setup database list', () => {
  it('should return database setup in list', () => {
    jest.isolateModules(() => {
      jest.doMock('../../config.json', () => ({
        setup: {
          db: [
            {
              id: 'prisma',
              host: 'mongodb://localhost:27017/prisma',
              user: 'XXXX',
              pass: 'XXXX'
            }
          ]
        }
      }))

      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const loadSetup = require('../libs/loadSetup').default;
      const list = loadSetup();

      expect(list).toStrictEqual([
        {
          id: 'prisma',
          host: 'mongodb://localhost:27017/prisma',
          user: 'XXXX',
          pass: 'XXXX'
        }
      ])
    })
  })
})