import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Introduction from './Introduction'
import Contract from './Contract.jsx'
import IntroductionFromJson from './IntroductionFromJson.jsx'
import Layout from './Layout.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<App />}></Route>
          <Route path="/introduction" element={<Introduction />}></Route>
          <Route path="/introductionFromJson" element={<IntroductionFromJson />}></Route>
          <Route path="/contract" element={<Contract />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
