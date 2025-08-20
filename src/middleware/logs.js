const logRequest = (req, res, next) => {
    console.log("log terjadi ke PATH: ", req.path);
    next();
};

module.exports = logRequest;