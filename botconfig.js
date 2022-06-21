module.exports = {
    Admins: ["UserID", "UserID"],
    ExpressServer: true,
    DefaultPrefix: process.env.Prefix || ">",
    Port: 3000,
    SupportServer: "https://discord.gg/sbySMS7m3v",
    Token: process.env.Token || "",
    ClientID: process.env.Discord_ClientID || "",
    ClientSecret: process.env.Discord_ClientSecret || "",
    Scopes: ["identify", "guilds", "applications.commands"],
    ServerDeafen: true,
    DefaultVolume: 100,
    CallbackURL: "/api/callback",
    "24/7": false,
    CookieSecret: "Pikachu is LOL",
    IconURL: "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif",
    EmbedColor: "RANDOM",
    Permissions: 2205281600,
    Website: process.env.Website || "https://example.com",

    Presence: {
        status: "online",
        name: "Music",
        type: "LISTENING",
    },

    Lavalink: {
        id: "Main",
        host: "lavalink.darrenofficial.com",
        port: 80,
        pass: "hisudhan",
        secure: false,
        retryAmount: 200,
        retryDelay: 40,
    },

    Spotify: {
        ClientID: process.env.Spotify_ClientID || "",
        ClientSecret: process.env.Spotify_ClientSecret || "",
    },
};