import React, {Component, useCallback, useState} from 'react';
import WithOpenModalWindow from "@/Core/Decorators/WithOpenModalWindow"
import PropTypes from 'prop-types';
import DataSourceModal from "./DataSourceModal";
import DatePicker from "../../../../Components/Fields/DatePicker";

const ReportConstructor = (props) => {
    const [selectedSource, setSelectedSource] = useState({})
    const [dataSource, setDataSource] = useState({})
    const [continuousDateRange, setContinuousDateRange] = useState([])
    const selectSource = useCallback(() => {
        setSelectedSource((currentVal) => {
            setDataSource(currentVal)
            return {}
        })
    }, [selectedSource, dataSource])
    const selectDataSource = () => {
    const { openModalWindow } = props
        openModalWindow({
            component: () => (<DataSourceModal
                setSelectedSource={setSelectedSource}
                setDataSource={setDataSource}
            />),
            onSubmit: selectSource
        })
     }
     const formPayload = { dateRange: []}
     console.log(selectedSource)
    return (
        <div className="h-100">
            <div
                className="display-flex j-c-space-between p-10 a-i-center"
                style={{borderBottom: "2px solid black", fontSize: "16px"}}
            >
                <div className="display-flex a-i-center">
                    <div
                        className="cursor"
                        onClick={() => selectDataSource()}
                    >
                        {dataSource.title ? dataSource.title : "Источник данных"}
                    </div>
                    <div className="p-l-15">
                    {
                        dataSource.title && (
                            <DatePicker
                                id="continuousDateRange"
                                range
                                formPayload={formPayload}
                                value={continuousDateRange}
                                onInput={setContinuousDateRange}
                                placeholder="Непрерывный диапазон дат"
                            />
                        )
                    }
                    </div>
                </div>
                <div>
                    Сохранить задачу
                </div>
            </div>
        </div>
    );
}

ReportConstructor.propTypes = {};

export default WithOpenModalWindow(ReportConstructor);