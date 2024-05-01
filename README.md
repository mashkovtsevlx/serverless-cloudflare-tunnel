# Serverless Cloudflare Tunnel

<p>
  <a href="https://www.serverless.com">
    <img src="http://public.serverless.com/badges/v3.svg">
  </a>
</p>

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