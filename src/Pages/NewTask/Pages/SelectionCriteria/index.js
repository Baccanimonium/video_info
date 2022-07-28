import React, {useState, useCallback, useRef} from 'react';
import PropTypes from 'prop-types';
import {configForBtnCalendar, editConfig, editConfigIntervalRange, editConfigTimeRange} from "@/Pages/NewTask/config";
import TipsOverlayComponent from "@/Components/TipsHelp/TipsOverlayComponent";
import ContextMenuValueEditor from "@/Components/Fields/InputContstuctor/InputControllers/ContextMenuValueEditor";
import {InformationCardMin} from "@/Pages/NewTask/styles";
import {BsCalendar, BsCalendar3, BsCalendar3Range} from "react-icons/bs";
import SelectionCriteriaForNewTask from "@/Pages/NewTask/Pages/SelectionCriteria/Components/SelectionCriteriaForNewTask";

const SelectionCriteria = ({ tabState, updateState }) => {
  const [tipsName, setTipsName] = useState("")
  const [event, setEvent] = useState()
  const [continuousDateRange, setContinuousDateRange] = useState([])
  const [continuousIntervalRange, setContinuousIntervalRange] = useState([])

  const editContinuousDateRange = useCallback((value) => {
    setContinuousDateRange(value)
    updateState({
      editData: true,
      saveData: false,
      date: value,
      isDataChanged: true
    })
  }, [])

  const timerRef = useRef()
  const showTips = useCallback((name) => (e) => {
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setEvent(e)
    }, 500)
    setTipsName(name)
  }, [])

  const closeTips = useCallback(() => {
    clearTimeout(timerRef.current)
    setEvent(undefined)
    setTipsName("")
  }, [setEvent])

  return (
    <div className="relative  flex-container">
      <div className="flex">
        {configForBtnCalendar.map(({label, id}) => (
          <>
            {
              tipsName === label && (
                <TipsOverlayComponent
                  key={id}
                  tipsText={label}
                  event={event}
                />
              )
            }
          </>
        ))}
        <ContextMenuValueEditor
          id="ContinuousDateRange"
          label="Выбор даты или периода"
          fields={editConfig}
          formPayload={tabState}
          value={continuousDateRange}
          onInput={editContinuousDateRange}
          minSize="320"
        >
          {(onEditValue) => (
            <InformationCardMin
              onMouseEnter={showTips("Выбор даты или периода")}
              onMouseLeave={closeTips}
              onClick={onEditValue}
              className="mini"
            >
              <BsCalendar/>
            </InformationCardMin>
          )}
        </ContextMenuValueEditor>

        <ContextMenuValueEditor
          id="IntervalRange"
          label="Выбор интервального диапазона"
          fields={editConfigIntervalRange}
          formPayload={tabState}
          value={continuousIntervalRange}
          onInput={setContinuousIntervalRange}
          minSize="320"
        >
          {(onEditValue) => (
            <InformationCardMin
              onMouseEnter={showTips("Выбор интервального диапазона")}
              onMouseLeave={closeTips}
              onClick={!continuousDateRange.length && onEditValue}
              className="mini"
            >
              <BsCalendar3/>
            </InformationCardMin>
          )}
        </ContextMenuValueEditor>

        <ContextMenuValueEditor
          id="TimeRange"
          label="Выбор временных интервалов"
          fields={editConfigTimeRange}
          formPayload={tabState}
          value={continuousIntervalRange}
          onInput={setContinuousIntervalRange}
          minSize="320"
        >
          {(onEditValue) => (
            <InformationCardMin
              onMouseEnter={showTips("Выбор временных интервалов")}
              onMouseLeave={closeTips}
              onClick={!continuousDateRange.length && onEditValue}
              className="mini"
            >
              <BsCalendar3Range/>
            </InformationCardMin>
          )}
        </ContextMenuValueEditor>
      </div>
      <SelectionCriteriaForNewTask/>
    </div>
  );
};

SelectionCriteria.propTypes = {

};

export default SelectionCriteria;
