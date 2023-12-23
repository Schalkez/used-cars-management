import { rm } from 'fs/promises';
import { join } from 'path';
import { DataSource } from 'typeorm';

global.beforeEach(async () => {
  try {
    await rm(join(__dirname, '..', 'test.sqlite'));
  } catch (error) {
    // do nothing
  }
});

global.afterEach(async () => {
  const dataSource = new DataSource({ type: 'sqlite', database: 'sqlite3' });
  await dataSource.destroy();
});
