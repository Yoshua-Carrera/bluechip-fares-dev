import configuration from "../../content-collections.ts";
import { GetTypeByName } from "@content-collections/core";

export type Gallery = GetTypeByName<typeof configuration, "gallery">;
export declare const allGalleries: Array<Gallery>;

export type Service = GetTypeByName<typeof configuration, "services">;
export declare const allServices: Array<Service>;

export {};
