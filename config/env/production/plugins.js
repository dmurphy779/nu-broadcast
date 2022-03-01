module.exports = ({env}) => ({
  // ...
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID', 'AKIA43LHR2PWQDGPITUV'),
        secretAccessKey: env('AWS_ACCESS_SECRET', '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'),
        region: env('AWS_REGION', 'us-east-1'),
        params: {
          Bucket: env('AWS_BUCKET_NAME', 'strapi-nu-broadcast-media'),
        },
      },
    },
  },
  // ...
});
