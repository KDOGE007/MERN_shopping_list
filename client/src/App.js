import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList'
import AddItemModal from './components/AddItemModal'

import { Container } from 'reactstrap'

import { Provider } from 'react-redux'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <AppNavbar />
        <Container>
          <AddItemModal />
          <h4>Click on an item to strikethrough them</h4>
          <ShoppingList />
        </Container>
      </div>
    </Provider>
  )
}

export default App
