module.exports = function cors(app) {
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization',);
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        next();
        return res.status(200).json({});
    });
};

//function cors(app) { //console.log('cors'); app.use((req, res, next) => { res.header('Access-Control-Allow-Origin', '*'); res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization', ); if (req.method === 'OPTIONS') { res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,PATCH'); return res.status(200).json({}); } next(); }); } module.exports = cors;