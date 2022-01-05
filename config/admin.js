module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3c07e5dc63571c135a56c6967d85ccf4'),
  },
});
