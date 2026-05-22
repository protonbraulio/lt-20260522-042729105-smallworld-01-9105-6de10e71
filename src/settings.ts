// Global data
type Config = {
  title: string;
  description: string;
  lang: string;
  favicon: string;
  og: {
    image: string;
    imageAlt: string;
    imageType: string;
    imageWidth: string;
    imageHeight: string;
  };
};

export const siteConfig: Config = {
  title: "Smallworld Load Test 01 20260522-042729105",
  description: "Real staging load test batch 20260522-042729105 for Smallworld.",
  lang: "en",
  favicon: "/favicon.svg",
  og: {
    image: "/og-image.svg",
    imageAlt: "Open Graph image for Smallworld Load Test 01 20260522-042729105",
    imageType: "image/svg+xml",
    imageWidth: "1200",
    imageHeight: "630",
  },
};
