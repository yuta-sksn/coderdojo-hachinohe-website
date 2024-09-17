import { microCMS } from '@/libs/microCMSClient';
import excludeKeys from '@/utils/excludeKeys';

import { reportKeys } from '../types/keys';

import type { Report } from '../types';

export default async function getNextEvents() {
  return await microCMS.getList<Report>({
    endpoint: 'reports',
    customRequestInit: {
      next: { revalidate: 60 },
    },
    queries: {
      fields: excludeKeys<Report>(reportKeys, 'content'),
    },
  });
}