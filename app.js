const dbConfig = {
    mysql: {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'my_database'
    },
    mysl: {
        host: 'localhost',
        user: 'postgres',
        password: 'password',
        database: 'my_database'
    }
};
const getDbConfig = (dbType) => {
    if (dbConfig[dbType]) {
        return dbConfig[dbType];
    } else {
        throw new Error('Unsupported database type');
    }
};

module.exports = { dbConfig, getDbConfig };
