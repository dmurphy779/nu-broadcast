'use strict';

/**
 * broadcast router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter(
  'api::broadcast.broadcast',
  ({ strapi }) => ({
    async find(ctx) {
      const { user } = ctx.state;
      const entities = await strapi.db
        .query("api::broadcast.broadcast")
        .findMany({
          where: {
            links: user,
          },
          populate: true,
        });
      return entities;
    },
  })
);

