module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AKIA43LHR2PWVYLKOTEP'),
        secretAccessKey: env('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'),
        region: env('us-east-1'),
        params: {
          Bucket: env('strapi-nu-broadcast-media'),
        },
      },
    },
  },
  // ...
});
