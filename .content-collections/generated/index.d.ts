import configuration from '../../content-collections.ts'
import { GetTypeByName } from '@content-collections/core'

export type Gallery = GetTypeByName<typeof configuration, 'gallery'>
export declare const allGalleries: Array<Gallery>

export type Talk = GetTypeByName<typeof configuration, 'talks'>
export declare const allTalks: Array<Talk>

export {}
