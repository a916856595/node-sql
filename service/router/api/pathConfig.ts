import { IPathConfig } from '../../../types/base.interface';

const pathConfig: IPathConfig[] = [
  {
    path: '/test',
    file: './db/test',
    method: 'all',
  },
];

export default pathConfig;

export const rootPath = '/api';
