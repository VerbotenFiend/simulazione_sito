import { groq } from "next-sanity";

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    title,
    description,
    heroImage,
    heroText,
    phoneNumber,
    email,
    address,
    socialLinks,
    openingHours,
    primaryColor,
    googleMapsEmbedUrl
  }
`;

export const homepageQuery = groq`
  *[_type == "homepage"][0] {
    heroTitle,
    heroSubtitle,
    heroImage
  }
`;

export const aboutQuery = groq`
  *[_type == "about"][0] {
    title,
    heroImage,
    storyTitle,
    storyText,
    storyImage,
    values
  }
`;
