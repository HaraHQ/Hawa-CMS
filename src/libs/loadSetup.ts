import config from "../../config.json";

interface DatabaseSetting {
  id: string;
  title: string;
  icon: string;
  module: string[];
}

const loadSetup = (): DatabaseSetting[] => {
  return config.setup.db;
};

export default loadSetup;