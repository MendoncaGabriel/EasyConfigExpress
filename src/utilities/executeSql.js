const db = require('../../database')

function executeSql(sql, values){
    return new Promise((resolve, reject) => {
        db.query(sql, values, (error, data) => {
            if(error){

                console.log({
                    sqlState: error.sqlState,
                    sqlMessage: error.message
                });
                
                reject(msg);
            }else{
                resolve(data);
            };
        });
        
    });
};


module.exports = executeSql