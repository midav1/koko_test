require("dotenv").config()


exports.secret = {
    MONGOUSER :process.env.MONGOUSER,
    MONGOPASSWORD:process.env.MONGOPASSWORD,
    TOKENSECRET:process.env.TOKENSECRET
}


