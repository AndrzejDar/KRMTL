module.exports = ({ env }) => ({
    // ...
    slugify: {
      enabled: true,
      config: {
        contentTypes: {
          Novel: {
            field: 'Title_Slug',
            references: 'Title',
          }, 
        },
      },
    },
    // ...
  });