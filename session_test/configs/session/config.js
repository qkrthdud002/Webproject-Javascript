const session = require("express-session")
const FileStore = require("session-file-store")(session)

const fileStoreOptions={return: 0};

module.export={
    store:new FileStore(fileStoreOptions),
    secret: 'salty salt',
    resave:false,
};