const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/task_list');
    console.log('connected to mongodb successfully');

}
module.exports = mongoose;