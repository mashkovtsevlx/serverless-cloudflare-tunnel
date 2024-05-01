const { tunnel } = require("cloudflared");

class CloudflareTunnelPlugin {
    constructor(serverless, options) {
        this.serverless = serverless;
        this.options = options;
        this.stop = null;
        this.port = this.serverless.service.custom["serverless-offline"].httpPort || 3000;
        this.hooks = {
        'before:offline:start:init': this.setupTunnel.bind(this),
        'before:offline:start:end': this.teardownTunnel.bind(this)
        };
    }

    async setupTunnel() {
        const tunnelUrl = await this.createTunnel();
        this.serverless.service.provider.environment.CLOUDFLARE_TUNNEL_URL = tunnelUrl;
        this.serverless.cli.log(`Cloudflare Tunnel URL set: ${tunnelUrl}`);
    }

    async teardownTunnel() {
        await this.deleteTunnel();
        this.serverless.cli.log('Cloudflare Tunnel has been closed.');
    }

    async createTunnel() {
        const { url, stop } = tunnel({ "--url": `http://localhost:${this.port}` });

        this.stop = stop;
        return await url;
    }

    async deleteTunnel() {
        this.stop();
    }
}

module.exports = CloudflareTunnelPlugin;