import { createDirectus, readItems, rest } from "@directus/sdk";
import { DIRECTUS_HOST } from "astro:env/client";

interface Sponsor {
  id: number;
  name: string;
  logo: string;
  order: number;
  link: string | null;
}

interface Member {
  firstname: string;
  image: string | null;
  chairman: boolean;
}

interface Config {
  openingStatus: "CLOSED" | "OPEN";
}

interface DirectusSchema {
  sponsors: Sponsor[];
  members: Member[];
  config: Config;
}

export const directus =
  createDirectus<DirectusSchema>(DIRECTUS_HOST).with(rest());

/**
 * Retrieve a directus asset with a given id
 * @param id Id of the asset from directus to load
 * @param fileName optional filename after the UUID to optimize for SEO
 * @returns URL of the asset with the given id
 */
export const getAssetUrl = (id: string, fileName?: string) =>
  new URL(
    fileName ? `/assets/${id}/${fileName}` : `/assets/${id}`,
    DIRECTUS_HOST,
  );
