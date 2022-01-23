import React, {useCallback, useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import {DataSetContainer} from "@/Pages/Tab/Pages/DataSet/styles";
import {ReportContainer} from "./styles"
import Tree from "rc-tree";
import CheckboxGroup from "../../../../Components/Fields/CheckboxGroup";

const statistics = [
  { key: 2274, title: "GRP" },
  { key: 2272, title: "WRP" },
  { key: 2270, title: "Mins" },
  { key: 2268, title: "Share" },
]

const attributes = [
  { key: 2274, title: "Year" },
  { key: 2272, title: "Month" },
  { key: 2270, title: "Month excl year" },
  { key: 2268, title: "Month digt" },
  { key: 2271, title: "TvCompany" },
  { key: 2265, title: "TvNet" },
]

const Reports = () => {
  const [selectedKey, setSelectedKey] = useState("")
  const [checked, setCheckedKey] = useState("")
  const [freeState, setFreeState] = useState([])
  const [freeStateTwo, setFreeStateTwo] = useState([])

  const TreeData = useMemo(() => [
    {
      key: '0',
      title: 'Статистика',
      children: freeState.map((item, i)=> ({
        ...item, key: `0-${i}`
      }) ),
    },
    {
      key: '1',
      title: 'Атрибуты',
      children: freeStateTwo.map((item, i)=> ({
        ...item, key: `1-${i}`
      }) ),
    },
  ], [freeStateTwo, freeState])

  const onSelect =  useCallback((selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
    this.selKey = info.node.props.eventKey;
  }, []);
  const onExpand = useCallback(expandedKeys => {
    console.log('onExpand', expandedKeys);
  }, []);

  const onCheck = useCallback((checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  }, []);

  return (
    <DataSetContainer className="flex-container pos-relative overflow-hidden">
      <div className="flex-container p-l-20 p-r-20">
        <ReportContainer>
          <div>
            <h3>
              Отчеты
            </h3>
          </div>
          <div>
            <h3>
              Выбранные атрибуты
            </h3>
            <Tree
              showLine
              selectable={false}
              defaultExpandAll
              onExpand={onExpand}
              defaultSelectedKeys={selectedKey}
              defaultCheckedKeys={checked}
              onSelect={onSelect}
              onCheck={onCheck}
              treeData={TreeData}
            />
          </div>
          <div>
            <h3>
              Атрибуты
            </h3>
            <CheckboxGroup
              value={freeState}
              blockTitle="Статистика"
              labelKey="title"
              valueKey="key"
              options={statistics}
              onInput={setFreeState}
              returnObjects
            />
            <CheckboxGroup
              value={freeStateTwo}
              blockTitle="Атрибуты"
              labelKey="title"
              valueKey="key"
              options={attributes}
              onInput={setFreeStateTwo}
              returnObjects
            />
          </div>
        </ReportContainer>
      </div>
    </DataSetContainer>
  );
};

Reports.propTypes = {

};

export default Reports;
