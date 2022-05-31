module.exports = ({ env }) => ({
  url: env('APP_URL'),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS', ['16652e28d3c0c373f65cbfb0f582d8f5', '3c0a6ce4791c2cb45e79aa7a1b5f875d'])
  }
});
