import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store'
import { ServiceProvider } from './components/srvices-context'
import WorkService from './service'
import ErrorBoundry from './components/error-boundry'

const service = new WorkService()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ServiceProvider value={service}>
        <ErrorBoundry>
          <App />
        </ErrorBoundry>
      </ServiceProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
