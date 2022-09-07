const slugify = require("slugify");

module.exports = {
  beforeCreate: async (event) => {
    const { data } = event.params;
    if (data.Title&&!data.slug) {
      data.slug = slugify(data.Title, { lower: true });
    }
    //populate thumbnail url for quick acces
    // const id = data.Cover;
    // const query={
    //     filters: {id},
    // }
    // // const url = await strapi.plugins["upload"].services.upload.findOne( id );
    // // const url = await strapi.plugins.upload.services.upload.findOne(`'${id}'`);//'1' works
    // // const url = await strapi.plugins.upload.services.upload.findMany({data});
    // // const url = await strapi.query('file','upload').findOne({ id: data.Cover } );
    // // const url = await strapi.query('upload').find({ id: data.Cover } );
    // const url = await strapi.plugins.upload.services.upload.findMany(query);//działa ale wyjebuje sie na publish
    // console.log(url);
    // // console.log(url.formats);
    // if (url) {
    //   data.cover_thumbnail_url = url[0].formats.thumbnail.url;
    // }
    // console.log(data);
  },
  beforeUpdate: async (event) => {
    //slugify title
    const { data } = event.params;
    if (data.Title&&!data.slug) {
      data.slug = slugify(data.Title, { lower: true });
    }
    //populate thumbnail url for quick acces
    // const id = data.Cover;
    // // const url = await strapi.plugins["upload"].services.upload.findOne( id );
    // // const url = await strapi.plugins.upload.novels.file.where( 'id', 'IN', novel.Cover ).fetch();
    // // const url = await strapi.plugins.upload.services.upload.findOne(`'${id}'`);//'1' works
    // // const url = await strapi.plugins.upload.services.upload.findMany({id: data.Cover});
    // // const url = await strapi.query('file','upload').findOne({ id: data.Cover } );
    // const url = await strapi.plugins.upload.services.upload.findOne(id);
    // console.log('beforeUpdate');
    // console.log(url);
    // // console.log(url.formats);
    // // console.log(url.formats.thumbnail);
    // if (url) {
    //   data.cover_thumbnail_url = url.formats.thumbnail.url;
    // }
  },
};
