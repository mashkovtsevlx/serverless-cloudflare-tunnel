# Serverless Cloudflare Tunnel

[![serverless](http://public.serverless.com/badges/v3.svg)](https://www.serverless.com)
[![npm version](https://img.shields.io/npm/v/serverless-cloudflare-tunnel?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/serverless-cloudflare-tunnel)
[![npm downloads](https://img.shields.io/npm/dm/serverless-cloudflare-tunnel)](https://www.npmjs.com/package/serverless-cloudflare-tunnel)

This [Serverless](https://github.com/serverless/serverless) plugin creates a Cloudflare tunnel for your serverless offline endpoints.

## Installation

First, add Serverless Offline to your project:
`npm install serverless-offline --save-dev`

Add serverless-cloudflare-tunnel to your project:
`npm install --save-dev serverless-cloudflare-tunnel`

Add serverless-cloudflare-tunnel to serverless.yml BEFORE serverless-offline:
```
plugins:
  - serverless-cloudflare-tunnel
  - serverless-offline
```

Make sure you have your serverless-offline port set in serverless.yml:
```
custom:
  serverless-offline:
    httpPort: 3005
```

**Usage**

You will be able to see the tunnel URL when you start serverless offline:
```
Cloudflare Tunnel URL set: https://tile-wins-that-tex.trycloudflare.com
```

Also, you'll be able to access CLOUDFLARE_TUNNEL_URL environment variable in your code: `process.env.CLOUDFLARE_TUNNEL_URL`