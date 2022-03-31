import React, {Component, useCallback, useState} from 'react';
import WithOpenModalWindow from "@/Core/Decorators/WithOpenModalWindow"
import PropTypes from 'prop-types';
import DataSourceModal from "./DataSourceModal";
import DatePicker from "../../../../Components/Fields/DatePicker";
import RenderOverlayMenu from "@/Components/OverlayMenu/RenderOverlayMenu"
import WithCloseWindow from "@/Core/RenderProps/withCloseWindow"
import OverlayMenu from "@/Components/OverlayMenu"


const ReportConstructor = (props) => {
    const [selectedSource, setSelectedSource] = useState({})
    const [dataSource, setDataSource] = useState({})
    const [openSourceMenu, setOpenSourceMenu] = useState(false)
    const [continuousDateRange, setContinuousDateRange] = useState([])
    const selectSource = useCallback(() => {
        setSelectedSource((currentVal) => {
            setDataSource(currentVal)
            return {}
        })
    }, [selectedSource, dataSource])
    const closeMenu = useCallback(() => { setOpenSourceMenu(false) }, [])
    const openMenu = useCallback(() => { setOpenSourceMenu(true) }, [])
     const formPayload = { dateRange: []}
    return (
        <div className="h-100">
            <div
                className="display-flex j-c-space-between p-10 a-i-center"
                style={{borderBottom: "2px solid black", fontSize: "16px"}}
            >
                <div className="display-flex a-i-center">
                    <RenderOverlayMenu
                        onOpenOverlayMenu={openMenu}
                        renderOverlayMenu={openSourceMenu}
                        menuComponent={OverlayMenu}
                    >
                        {(overlayBoundRef, onOpenOverlayMenu, OverlayMenu) => (
                                <WithCloseWindow
                                    closeWindow={closeMenu}
                                    byKey={openSourceMenu}
                                >
                                    {(onMouseDown) => (
                                        <button
                                            ref={overlayBoundRef}
                                            type="button"
                                            onMouseDown={onMouseDown}
                                        >
                                            <div
                                                className="cursor"
                                                onClick={onOpenOverlayMenu}
                                            >
                                                {dataSource.title ? dataSource.title : "Источник данных"}
                                            </div>
                                            {openSourceMenu && (
                                                <OverlayMenu
                                                    className="display-flex flex-column j-c-center p-10 h-100"
                                                >
                                                    <DataSourceModal
                                                        setSelectedSource={setSelectedSource}
                                                        setDataSource={setDataSource}
                                                    />
                                                    <button
                                                        className="golden btn min text-uppercase"
                                                        type="button"
                                                        onClick={selectSource}
                                                    >
                                                        ok
                                                    </button>
                                                </OverlayMenu>
                                            )}
                                        </button>
                                    )}
                                </WithCloseWindow>
                                )}
                    </RenderOverlayMenu>
                    <div className="p-l-15 w-320">
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