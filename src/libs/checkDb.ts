import config from "../../config.json";

interface Database {
  host: string;
  user: string;
  pass: string;
  id: string;
}

const checkDB = (): Database | null => {
  if (config.database)
    return config.dbs.find((db: Database) => db.id === config.database) || null;
  return null;
};

export default checkDB;
