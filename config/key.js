import { PASS, USER_NAME, DATA_BASE_NAME } from './secret'

module.exports = {
  mongoURI: `mongodb+srv://${USER_NAME}:${PASS}@${DATA_BASE_NAME}.rb0un.mongodb.net/MernShoppingList?retryWrites=true&w=majority`,
}
