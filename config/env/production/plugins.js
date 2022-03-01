module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('S3-ACCESSKEYID'),
        secretAccessKey: env('SECRETS3KEY'),
        region: env('us-east-1'),
        params: {
          Bucket: env('S3BUCKET'),
        },
      },
    },
  },
  // ...
});
