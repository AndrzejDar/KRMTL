'use strict';

/**
 * novel router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;



const mycustomRoute = [
    {
      method: "GET",
      path: "/novel/:slug",
      handler: "api::post.post.findOne",
    },
  ];

module.exports = createCoreRouter('api::novel.novel');
