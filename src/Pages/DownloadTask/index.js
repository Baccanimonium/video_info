import React, {useCallback, useState, useRef} from 'react';
import { WrapperButtons } from "./style"
import DataSourceModal from "../NewTask/Components/ReportConstructor";
import ContextMenu from "@/component_ocean/Components/ContextMenu";
import DatePicker from "@/component_ocean/Components/Inputs/DatePicker";
import {BorderButtonBlack, BorderButtonGold, GoldButton} from "@/Components/Buttons";
import BaseButton from "@/component_ocean/Components/Button";
import { AlertWindow } from "@/Components/ModalWindows";
import useTabItem from "@/component_ocean/Logic/Tab/TabItem";

const DownloadTask = () => {
  const [error, setError] = useState("")
  const download = () => {

  }
  const {
    // tabState,
    // setTabState,
  } = useTabItem({
    setTabName: useCallback(() => "Upload task", []),
    stateId: "upload task",
  })
  const [selectedSource, setSelectedSource] = useState({})
  const [dataSource, setDataSource] = useState({title: "ROSSIYA 1"})
  const [openSourceMenu, setOpenSourceMenu] = useState(false)
  const [continuousDateRange, setContinuousDateRange] = useState(["02.03.2022", "10.03.2022"])
  const [showTask, setShowTask] = useState(false)

  const selectSource = useCallback(() => {
    setSelectedSource((currentVal) => {
      setDataSource(currentVal)
      return {}
    })
  }, [selectedSource, dataSource])
  const closeMenu = useCallback(() => {setOpenSourceMenu(false) }, [])
  const openMenu = useCallback(() => { setOpenSourceMenu(true) }, [])
  const formPayload = { dateRange: []}

  const fileInputRef = useRef()
  const focusInput = useCallback(() => { fileInputRef.current.click() }, [])

  const handleInput = useCallback(({ target: { files } }) => {
    if (files[0].type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || files[0].type === "text/plain") {
      setShowTask(true)
    } else {
      setError("Файл не корректного формата")
    }
  }, [])

  const saveTask = () => {
    if (dataSource || continuousDateRange.length) {
      setError("Задача сохранена")
    }
  }

  return (
    <div className="flex-container relative overflow-hidden">
      {showTask
        ? (
          <div className="pl-5 pr-5">
            <BorderButtonGold
              type="button"
              className="w-52 mt-5"
              onClick={focusInput}
            >
              Загрузить задачу
              <input
                className="hidden"
                id="download_task"
                type="file"
                onInput={handleInput}
                ref={fileInputRef}
              />
            </BorderButtonGold>
          </div>
        )
        : (
          <div className="flex-container relative">
            <WrapperButtons className="pl-5 pr-5 pt-2.5 pb-2.5 items-start">
              <div>
                <div className="color-grey pb-1">Источник данных: </div>
                <div className="text-left pb-1">
                  {dataSource.title}
                </div>
                <div >
                  <button
                    className="transition-goldLight-gold"
                    onClick={openMenu}
                  >
                    Добавить источник данных
                  </button>
                  {openSourceMenu && <ContextMenu onClose={closeMenu}>
                    <div className="bg-white w-96 shadow-3 p-2.5">
                      <DataSourceModal
                        setSelectedSource={setSelectedSource}
                        setDataSource={setDataSource}
                      />
                      <GoldButton
                        className="w-32 uppercase mt-3"
                        type="button"
                        onClick={selectSource}
                      >
                        ok
                      </GoldButton>
                    </div>
                  </ContextMenu>}
                </div>
              </div>
              <div>
                <div className="color-grey pb-1.5">Непрерывный диапазон дат: </div>
                <DatePicker
                  id="continuousDateRange"
                  range
                  formPayload={formPayload}
                  value={continuousDateRange}
                  onInput={setContinuousDateRange}
                  placeholder="Непрерывный диапазон дат"
                />
              </div>
              <div className="flex pt-5">
                <BorderButtonBlack
                  type="button"
                  className="w-60 mr-2"
                  onClick={download}
                >
                  Интервальный диапазон дат
                </BorderButtonBlack>
                <BorderButtonBlack
                  type="button"
                  className="w-52"
                  onClick={download}
                >
                  Временные интервалы
                </BorderButtonBlack>
              </div>
            </WrapperButtons>

            <div className="flex-container pl-5 pr-5">
              <div className="flex-container">
              </div>
              <div className="flex justify-end mb-5">
                <GoldButton
                  type="button"
                  className="w-32 mr-2"
                  onClick={saveTask}
                >
                  Сохранить
                </GoldButton>
                <GoldButton
                  type="button"
                  className="w-32"
                  onClick={download}
                >
                  Продолжить
                </GoldButton>
              </div>
            </div>
            <AlertWindow
              className="flex flex-col items-center mt-90"
              open={error}
              onClose={() => setError("")}
            >
              <text className="text-center break-words my-auto mx-12">
                {error}
              </text>
              <BaseButton className="bg-color-lightGold color-white w-48 mt-auto mb-8">
                Ок
              </BaseButton>
            </AlertWindow>
          </div>
        )
      }
    </div>
  );
};

export default DownloadTask;
