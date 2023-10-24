import getConfigs from './config.common';

const baseUrl = process.env.NEXT_PUBLIC_DEV_API_URL as string;
const mode = 'development';

const configDevelopment = getConfigs({
  baseUrl,
  mode,
});

export default configDevelopment;
