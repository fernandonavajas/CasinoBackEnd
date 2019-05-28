"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Logger(req, res, next) {
    res.header('Access-Control-Allow-Origin');
    res.header('Date', Date.now());
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Methods');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    console.log(`Request...`);
    next();
    res.status(200);
}
exports.Logger = Logger;
;
//# sourceMappingURL=logger.middleware.js.map