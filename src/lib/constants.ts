import type { z } from "astro/zod";
import MetaDefaultImage from "@/assets/images/meta-default.png";
import avatar from "@/assets/images/avatar.png";
import type { seoSchemaWithoutImage } from "@/content.config";
import astroConfig from "astro.config.mjs";

export type AuthorInfo = {
  name: string;
  avatar: any;
  headline: string;
  username?: string;
  location?: string;
};

export type Seo = z.infer<typeof seoSchemaWithoutImage> & {
  image?: any;
};

type DefaultConfigurationType = {
  baseUrl: string;
  author: AuthorInfo;
  seo: Seo;
};

export const DEFAULT_CONFIGURATION: DefaultConfigurationType = {
  baseUrl: astroConfig.site || "https://getcvfolio.com",
  author: {
    avatar,
    name: "Timofey Zaruns",
    headline: "Shopify app developer",
    username: "timofeyzaruns",
    location: "",
  },
  seo: {
    title: "Custom Shopify App Developer – Timofey Zaruns",
    description:
      "Shopify app developer building custom Shopify apps, automations, and AI tools for merchants and e‑commerce brands.",
    type: "website",
    image: MetaDefaultImage,
    twitter: {
      creator: "@timofeyzaruns",
    },
    robots: "index, follow",
  },
};
