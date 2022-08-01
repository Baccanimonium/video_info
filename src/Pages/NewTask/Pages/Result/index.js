import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from "@/component_ocean/Components/Tables/Grid"
import {useMemo} from "react";

const baseData = {
  Year: "2020", Year1: "tretr", Month: "авг-2020", TvCompany: "ДОМАШНИЙ (СЕТЕВОЙ)", TvNet: "ДОМАШНИЙ", "GRP BA": 0.6788
}


const columns = [
  { id: "Year", label: "Year" },
  { id: "Year1", label: "Year1" },
  { id: "Month", label: "Month" },
  { id: "TvCompany", label: "TvCompany" },
  { id: "GRP BA", label: "GRP BA" },
]

for (let i = 0; i < 50; i++) {
  if (i > 4) {
    columns[i] = { id: i, label: i }
    baseData[i] = i
  }
}

const plugins = {
  filterPlugin: {}
}


const Result = () => {

  const value = useMemo(() => {
    const result = new Array(155)
    for (let i = 0; i < result.length; i++) {
      result[i] = { ...baseData, 5: i }
    }
    return result
  }, [])

  return (
    <Grid value={value} id="result" columns={columns} plugins={plugins}/>
  )
}
export default Result
