module.exports = ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT', 'e?]!_q!Q!&ZC26sY4I!@Bb)/3odqYG=lf1[!>vOd;-7=#u+3,7z9|<zw{gW?&fU$'),
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3c07e5dc63571c135a56c6967d85ccf4'),
  },
});
