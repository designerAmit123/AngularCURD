module.exports = {
    HOST : 'localhost',
    USER : 'root',
    PASSWORD : '',
    DB : 'full_stack_curd_app',
    dialect : 'mysql',
    pool : {
        max : 5,
        min : 0,
        acquire : 30000,
        idle : 10000
    }
};