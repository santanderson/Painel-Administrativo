import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/style.css'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store/store'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

    <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
            <App store={store} persistor={persistor}/>
        </HashRouter>
    </PersistGate>
)