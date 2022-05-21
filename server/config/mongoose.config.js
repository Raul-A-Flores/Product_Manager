const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://root:root@mern.llhpi.mongodb.net/product_manager?retryWrites=true&w=majority", { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));

    //"mongodb+srv://root:<< PASSWORD aka root >> @mern.llhpi.mongodb.net/ <<NAMEOFDATABASE>>  ?retryWrites=true&w=majority"