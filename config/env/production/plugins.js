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
