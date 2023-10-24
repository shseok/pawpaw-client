import getConfigs from './config.common';

const baseUrl = process.env.NEXT_PUBLIC_LOCAL_API_URL as string;
const mode = 'local';

const configLocal = getConfigs({
  baseUrl,
  mode,
});

export default configLocal;
