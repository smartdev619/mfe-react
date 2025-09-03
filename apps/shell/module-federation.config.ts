import { ModuleFederationConfig } from '@nx/module-federation';
const isProd = process.env.NODE_ENV === 'production';

const config: ModuleFederationConfig = {
  name: 'shell',
  remotes:  [
      'products',
      isProd
        ? 'https://mfe-react-products-ey5jn9ssd-chhabeg-singhs-projects.vercel.app/'
        : 'http://localhost:4201/',
    ],
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;

