const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

export default function sitemap() {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Add entries as these surfaces ship:
    // `${baseUrl}/awakening`, `${baseUrl}/coaching`
  ];
}
