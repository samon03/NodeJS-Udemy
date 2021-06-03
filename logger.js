    console.log(__filename);
    console.log(__dirname);
    
    var url = 'http://mylogger.io/log';

    function log(msg)
    {
        console.log(msg);
    }

    module.exports = log;  