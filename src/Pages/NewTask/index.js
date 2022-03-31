import React, {useCallback, useState} from 'react';
import BsButton from "../../Components/BsButton";
import PracticesBar from "../../Components/PracticesBar";
import {WrapperButtons} from "../DownloadTask/style";
import DataSourceModal from "../Tab/Pages/ReportConstructor/DataSourceModal";
import DatePicker from "../../Components/Fields/DatePicker";
import RenderOverlayMenu from "@/Components/OverlayMenu/RenderOverlayMenu"
import WithCloseWindow from "@/Core/RenderProps/withCloseWindow"
import OverlayMenu from "@/Components/OverlayMenu"

const NewTask = () => {
  const download = () => {

  }
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
    <div className="flex-container pos-relative overflow-hidden">
      <div className="flex-container pos-relative">
        <WrapperButtons className="l-p-layout r-p-layout p-t-10 p-b-10 a-i-flex-start">
          <div>
            <div className="color-grey p-b-5">Источник данных: </div>
            <div className="text-align-left p-b-5">
              {dataSource.title}
            </div>
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
                        className="cursor color-lightGold link"
                        onClick={onOpenOverlayMenu}
                      >
                        Добавить источник данных
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
                            className="border-gold btn min text-uppercase"
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
          </div>
          <div className="">
            <div className="color-grey p-b-5">Непрерывный диапазон дат: </div>
            <DatePicker
              id="continuousDateRange"
              range
              formPayload={formPayload}
              value={continuousDateRange}
              onInput={setContinuousDateRange}
              placeholder="Непрерывный диапазон дат"
            />
          </div>
          <div className="display-flex p-t-19">
            <BsButton
              type="button"
              className="border-black btn width-max color-greyDarken w-18 m-r-5"
              onClick={download}
            >
              Интервальный диапазон дат
            </BsButton>
            <BsButton
              type="button"
              className="border-black btn width-midi color-greyDarken w-18"
              onClick={download}
            >
              Временные интервалы
            </BsButton>
          </div>
        </WrapperButtons>

        <PracticesBar/>

        <div className="flex-container l-p-layout r-p-layout">
          <div className="flex-container">

          </div>
          <div className="display-flex j-c-flex-end m-b-20">
            <BsButton
              type="button"
              className="border-gold btn width-medium color-greyDarken w-18 m-r-10"
              onClick={download}
            >
              Сохранить
            </BsButton>
            <BsButton
              type="button"
              className="border-gold btn width-medium color-greyDarken w-18"
              onClick={download}
            >
              Продолжить
            </BsButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
