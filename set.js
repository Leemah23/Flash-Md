const fs = require('fs-extra');
const path = require("path");
const { Sequelize } = require('sequelize');

// Load environment variables if the .env file exists
if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined ? databasePath : process.env.DATABASE_URL;

module.exports = {
    session: process.env.SESSION_ID || ;;FLASH-MD-WA-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0JweDlIQ1FoOUpaV3owQllGT0ZadithdmsvNU1aSmwrNHRqUWRodzJXMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3Z1cUxiUUlMK2V2eDVRR2k1RVFiVnlVMTBlYUlmRDM2MXJFVkxFQVZYcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNS1c5MldBcGllM1p5RmxLdWlvbU9EZ1pQSWdwWDl4Q1FhRDNWcDJEQm1nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlM3ByVXJ4ajRCNmhvQ1g0N0dtNWQ5SitKRDZuRWk2d3NTb0g0RHJXWGtZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNESkkrbzZDNityZ2lpSXRTaHdhQ3ZVWU1iVmRJL25mQUsrRFB5VXA3Vmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRsOGdjN0FyRnhWVWlSdUZiUkNOdTdvQjMvMVVJVUZFb3lqcVdPYjM2VEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUdrbWZJTC9CZlRkMG81eDdxaE4zcmZOdFhhWnFybUlWV3pzTEFOMHkwQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXdwZlZWK3FKT2pEcE9uZDRNczUzbzlOOEJDaTF6enBwdmFDT0JCVTJocz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpaUmwwN1BObGo5UHRWTEpxVmltMVFZTnpNNFRDL3NPdkNsMzU1d2JrQUhCVHE5bnhDRk9Mc3Rhc3NzdmFGWktISmIzODdzN3JlWmtma25nQUUwdWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMxLCJhZHZTZWNyZXRLZXkiOiI1UzlFZVR5UGNDMXVRM1pFZGZxenlaTjl1QzllZ3YvYXI4YWZPcE02TmxjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJQaU9QbVlBQVFxT2Y0cE9jYnBIV3d3IiwicGhvbmVJZCI6IjdmN2NkNGE3LWI0OTAtNDY1Mi04ODhiLWVhMGI2YzRjZjVmMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuV3pSa1lrb3RpallrSklNcTJ5VTFZMjlJdlU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMDkrRHVxaFVYZmlSejJERFRZMmFXM21CMGNRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkMyTVY3SDNIIiwibWUiOnsiaWQiOiIyMzQ5MDIyNzUwNDM2OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTGVlbWFoIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJNzVtTEVCRUttaDFib0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIvVm5GUDVvQXlhZ09CZk9CTjBlaDBCREh1WjJQS2lEanlxV0tzQVhaS2hJPSIsImFjY291bnRTaWduYXR1cmUiOiJ5Ym01cHVPcUFqYzk1NlJ0S1FZVE5WZHRlbGdRKzRTd2Rza1lIQ3dhOE1OS1o3cnVuUVNqOUVBTkVhMnpjZHRONlRtWWs4aFpPQ0hyTTZ0anZWVnlBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNEdWdXk1dFdGdEN5bU12WE9TYUdHM0FuOEhhSGJvSmRQYUJsMkpDdFFlNVM0Mm8zeldZajVid0pqYTVPYzdIK2tDQ3dWei8zdVlsdG5kOGI4RldoaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDIyNzUwNDM2OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZjFaeFQrYUFNbW9EZ1h6Z1RkSG9kQVF4N21kanlvZzQ4cWxpckFGMlNvUyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMzY0NDQ3M30==>',
    PREFIXES: (process.env.PREFIX || '').split(',').map(prefix => prefix.trim()).filter(Boolean),
    OWNER_NAME: process.env.OWNER_NAME || "France King",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "254105915061",
    AUTO_READ_STATUS: process.env.AUTO_VIEW_STATUS || "off",
    AUTOREAD_MESSAGES: process.env.AUTO_READ_MESSAGES || "off",
    CHATBOT: process.env.CHAT_BOT || "on",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_SAVE_STATUS || 'off',
    A_REACT: process.env.AUTO_REACTION || 'on',
    L_S: process.env.STATUS_LIKE || 'on',
    AUTO_BLOCK: process.env.BLOCK_ALL || 'off',
    URL: process.env.MENU_LINKS || 'https://files.catbox.moe/c2jdkw.jpg',
    MODE: process.env.BOT_MODE || "private",
    PM_PERMIT: process.env.PM_PERMIT || 'on',
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
    HEROKU_API_KEY: process.env.HEROKU_API_KEY,
    WARN_COUNT: process.env.WARN_COUNT || '3',
    PRESENCE: process.env.PRESENCE || '',
    ADM: process.env.ANTI_DELETE || 'on',
    TZ: process.env.TIME_ZONE || 'Africa/Nairobi',
    DP: process.env.STARTING_MESSAGE || "on",
    ANTICALL: process.env.ANTICALL || 'on',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://flashmd_user:JlUe2Vs0UuBGh0sXz7rxONTeXSOra9XP@dpg-cqbd04tumphs73d2706g-a/flashmd"
        : "postgresql://flashmd_user:JlUe2Vs0UuBGh0sXz7rxONTeXSOra9XP@dpg-cqbd04tumphs73d2706g-a/flashmd",
    W_M: null, // Add this line
};

// Watch for changes in this file and reload it automatically
const fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`Updated ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
