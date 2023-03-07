import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {RecoilRoot} from "recoil"
import Home from './Home/Home'


ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
<Home/>
  </RecoilRoot>,
)
