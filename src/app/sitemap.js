const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

export default function sitemap() {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/personalize`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Add entries as these surfaces ship:
    // `${baseUrl}/awakening`, `${baseUrl}/coaching`
  ];
}
