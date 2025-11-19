import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

const isConfigured = projectId && dataset;

export const client = isConfigured
    ? createClient({
        projectId,
        dataset,
        apiVersion,
        useCdn,
        perspective: 'published',
    })
    : {
        fetch: async () => {
            console.warn("Sanity not configured, returning empty data");
            return [];
        }
    } as any;
