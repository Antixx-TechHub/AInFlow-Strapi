module.exports = ({ env }) => ({
  // ...
  seo: {
    enabled: true,
  },
  // ...
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 5, // Default is 5
    }
  },
  // ...
  upload: {
    // Update your cloudinary credentials here
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: "ainflow-cloudnary",
        api_key: "572318626483262",
        api_secret: "NeHtR0WgwI15iyeslTMkXW9HLXI",
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...
});