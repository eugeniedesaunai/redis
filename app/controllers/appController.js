const client = require('../database/connexion');

const AppController = {
    index(req, res) {
        res.status(200).json({ message: 'API running' });
    },

    async test(req, res) {
        const pong = await client.ping();

        res.status(200).json({ message: { pong } });
    },
};

module.exports = AppController;
