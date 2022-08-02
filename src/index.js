import React, {useEffect} from 'react';
import axios from "axios";
import ReactDOM from 'react-dom';
import { RecoilRoot } from "recoil"
import AppPreloader from "@/Components/AppPreloader/AppPreloader"
import { BrowserRouter as Router } from "react-router-dom";
import history from "./history"

import App from './App';

import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat"
import weekOfYear from "dayjs/plugin/weekOfYear"

import "react-virtualized/styles.css";
import 'rc-tree/assets/index.less';
import "react-perfect-scrollbar/dist/css/styles.css"
import "@/style/fonts.scss"
import "@/style/index.scss"
import "@/style/misc.scss"
import "@/style/colorsAndShadows.scss"
import "@/style/markupHelpers.scss"
import "@/style/typography.scss"
import "@/style/style-text.scss"

const weekday = require("dayjs/plugin/weekday")
const isoWeek = require("dayjs/plugin/isoWeek")
axios.defaults.headers.common["X-API-KEY"] = 12345

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
