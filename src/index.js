import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from "recoil"
import AppPreloader from "./AppPreloader"
import { BrowserRouter as Router } from "react-router-dom";
import history from "./history"

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat"
import weekOfYear from "dayjs/plugin/weekOfYear"


import "react-virtualized/styles.css";
import 'rc-tree/assets/index.less';
import "react-perfect-scrollbar/dist/css/styles.css"
import "@/style/fonts.scss"
import "@/style/style.scss"
import "@/style/style-form.scss"
import "@/style/misc.scss"
import "@/style/style-input.scss"
import "@/style/colors.scss"
import "@/style/markupHelpers.scss"
import "@/style/typography.scss"
import "@/style/iconEffects/style.scss"
import "@/style/style-btn.scss"
import "@/style/style-text.scss"
import "@/style/animations.scss"
import "@/style/style-global-components.scss"
import "@/style/hoverEffects.scss"
const weekday = require("dayjs/plugin/weekday")
const isoWeek = require("dayjs/plugin/isoWeek")

dayjs.extend(isoWeek)
dayjs.extend(weekOfYear)
dayjs.extend(weekday)

dayjs.extend(customParseFormat)

ReactDOM.render(
  <React.StrictMode>
      <RecoilRoot>
          <Router history={history}>
              <React.Suspense fallback={<AppPreloader />}>
                  <App />
              </React.Suspense>
          </Router>
      </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
