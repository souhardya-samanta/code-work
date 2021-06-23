const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/code-work-api", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: true,
    useUnifiedTopology: true,
})
