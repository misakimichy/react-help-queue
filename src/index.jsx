import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { HashRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/ticket-list-reducer'

const store = createStore(reducer)

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

const render = Component => {
  ReactDOM.render(
    <Provider>
      <HashRouter store={store}>
        <Component/>
      </HashRouter>
    </Provider>,
    document.getElementById('react-app-root')
  )
}

render(App)

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  })
}
/*eslint-enable */