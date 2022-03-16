require('dotenv').config()

module.exports = {
  mongoURI: `mongodb+srv://${process.env.USER_NAME}:${process.env.PASS}@${process.env.DATA_BASE_NAME}.rb0un.mongodb.net/MernShoppingList?retryWrites=true&w=majority`,
}
