import React, {useCallback, useEffect, useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import { listDirectory } from "@/Pages/NewTask/config";
import TipsOverlayComponent from "@/Components/TipsHelp";
import {CardForDirectory, InformationCardMin} from "@/Pages/NewTask/styles";
import {BsCalendar, BsCalendar3, BsCalendar3Range} from "react-icons/bs";
import OpenStateForWindows from "@/Components/OpenStateForWindows";
import {StateFullForm} from "@/component_ocean/Components/Forms";
import {ThemedContextMenu} from "@/Components/ContextMenus";
import SubmitContainer from "@/Components/Decorators/SubmitContainer";
import DatePicker from "@/component_ocean/Components/Inputs/DatePicker";
import {AlwaysRenderDropDown} from "@/Components/AlwaysRenderDropDown";
import {
  AdvertisersList, AdvertisingItemsLevel1, AdvertisingItemsLevel2, AdvertisingItemsLevel3, AdvertisingItemsLevel4,
  dictionary,
  GroupDictionary, GroupDictionaryParams, marking, Models,
  nationalTV, SubbrandsList,
  treeData,
  TVcompanies, TypeOfAdvertisement
} from "@/Pages/NewTask/Pages/SelectionCriteria/mok";
import PureUpdateArrayItems from "@/component_ocean/Utils/Arrays/PureUpdateArrayItems";
import {
  CheckboxGroupContainer,
  CheckboxGroupStyle,
  GridContainer
} from "@/Pages/NewTask/Pages/SelectionCriteria/styles";
import {GoldButton} from "@/Components/Buttons";
import ScrollBar from "react-perfect-scrollbar";
import Tree from "@/component_ocean/Components/Tree";
import RowComponent from "@/Pages/NewTask/Components/RowComponent";
import {StyleIcon} from "@/Components/styleIcon";
import {basketTrash} from "@/Icons/basketTrash";
import ButtonsForDelete from "@/Pages/NewTask/Components/ButtonsForDelete";
import BufferComponent from "@/Pages/NewTask/Components/BufferComponent";

const editDateRangeConfig = [
  {
    id: "continuousDateRange",
    component: SubmitContainer(DatePicker),
    label: "Выбор даты или периода",
    placeholder: "Выбор даты или периода",
    DropDownComponent: AlwaysRenderDropDown,
    range: true
  }
];
const editIntervalRangeConfig = [
  {
    id: "intervalRange",
    component: SubmitContainer(DatePicker),
    label: "Выбор интервального диапазона",
    placeholder: "Выбор интервального диапазона",
    DropDownComponent: AlwaysRenderDropDown,
    range: true
  }
];
const editTimeRangeConfig = [
  {
    id: "timeRange",
    component: SubmitContainer(DatePicker),
    label: "Выбор временных интервалов",
    placeholder: "Выбор временных интервалов",
    DropDownComponent: AlwaysRenderDropDown,
    range: true
  }
];

// назначаем что будет выделяться в узле
const selectRule = ({type}) => type === "block"

const SelectionCriteria = ({tabState, tabState: { criteriaData = treeData }, updateTabState}) => {
  const [selectedList, setSelectedList] = useState([])
  const [title, setTitle] = useState("")
  const [dictionaryGroup, setDictionaryGroup] = useState("")
  const [checkedObject, setCheckedObject] = useState([])
  const [nameSelect, setNameSelect] = useState("")

  const [listBuffer, setListBuffer] = useState([])
  const [titleBuffer, setTitleBuffer] = useState("")

  const [idSelectedNode, setIdSelectedNode] = useState("123123")
  const [indexAllocateNode, setIndexAllocateNode] = useState(0)

  const setPageData = useCallback((nextCriteriaData) => {
    updateTabState({ criteriaData: typeof nextCriteriaData === "function" ? nextCriteriaData(criteriaData) : nextCriteriaData})
  }, [updateTabState, criteriaData])

  // срабатывает при клике на группу
  const onSelect = useCallback(({node}) => {
    setIdSelectedNode(node.id)
  }, [])

  useEffect(() => {
    let dictionaryGroup
    switch (nameSelect) {
      case "Нац.телекомпании":
        setSelectedList(dictionary[nationalTV]);
        dictionaryGroup = GroupDictionary[nationalTV]
        setTitle("Нац.телекомпании");
        break;
      case "Телекомпании":
        setSelectedList(dictionary[TVcompanies]);
        dictionaryGroup = GroupDictionary[TVcompanies]
        setTitle("Телекомпании");
        break;
      case "Тип рекламы":
        setSelectedList(dictionary[TypeOfAdvertisement]);
        dictionaryGroup = GroupDictionary[TypeOfAdvertisement]
        setTitle("Тип рекламы");
        break;
      case "Рекламодатели":
        setSelectedList(AdvertisersList);
        setTitle("Рекламодатели");
        break;
      case "Марки":
        setSelectedList(marking);
        setTitle("Марки");
        break;
      case "Суббренды":
        setSelectedList(SubbrandsList);
        setTitle("Суббренды");
        break;
      case "Модели":
        setSelectedList(Models);
        setTitle("Модели");
        break;
      case "Предметы рекламы уровень 1":
        setSelectedList(AdvertisingItemsLevel1);
        setTitle("Предметы рекламы уровень 1");
        break;
      case "Предметы рекламы уровень 2":
        setSelectedList(AdvertisingItemsLevel2);
        setTitle("Предметы рекламы уровень 2");
        break;
      case "Предметы рекламы уровень 3":
        setSelectedList(AdvertisingItemsLevel3);
        setTitle("Предметы рекламы уровень 3");
        break;
      case "Предметы рекламы уровень 4":
        setSelectedList(AdvertisingItemsLevel4);
        setTitle("Предметы рекламы уровень 4");
        break;
      default:
        setSelectedList([])
        break
    }
    setDictionaryGroup(dictionaryGroup)
    setCheckedObject(criteriaData[0]?.children[indexAllocateNode]?.children.get(dictionaryGroup)?.children || [])
  }, [nameSelect, criteriaData, indexAllocateNode])

  useEffect(() => {
    setIndexAllocateNode(criteriaData[0].children.findIndex(({id}) => id === idSelectedNode))
  }, [idSelectedNode])

  const setNewTree = useCallback(() => {
    // добавление критериев в выделенный узел
    // когда нет второго уровня
    if (criteriaData[0].children.length === 0) {
      setPageData(([{
        children,
        ...firstLvlData
      }]) => ([{
        ...firstLvlData,
        children: [
          {
            id: "123123",
            title: "",
            condition: "AND",
            type: "block",
            children: new Map().set(dictionaryGroup, {
              ...GroupDictionaryParams[dictionaryGroup],
              children: checkedObject
            })
          }
        ]
      }]))
      // когда нет группы
    } else {
      setPageData(([{
        children: lvSecondChildren,
        // второй узел
        children: {
          [indexAllocateNode]: {
            children,
            // данные второго узла
            ...secondLvlChildrenData
          },
        },
        // данные первого уровня
        ...criteriaData}
                   ]) => {
        // создаем нового ребенка
        const newChildren = new Map(children)
        // если в данных в группе нет
        if (!newChildren.has(dictionaryGroup)) {
          // то добавляем данные
          newChildren.set(dictionaryGroup, {
            ...GroupDictionaryParams[dictionaryGroup],
            children: checkedObject
          })
          // если данные в группе есть
        } else {
          // то кладем старые данные и новые
          newChildren.set(dictionaryGroup, {
            ...newChildren.get(dictionaryGroup),
            // тут перезаписывается критерий, если выбран критерий одной и той же группы
            children: checkedObject
          })
        }
        return [{
          // записываем старые данные,
          ...criteriaData,
          // в children записываем данные второго уровня по индексу выделенного узла
          children: PureUpdateArrayItems(lvSecondChildren, indexAllocateNode, {...secondLvlChildrenData, children: newChildren})
        }]
      })
    }
  }, [dictionaryGroup, checkedObject, criteriaData, setPageData])

  // удаление данных из дерева
  const onUpdateOptions = useCallback((nextOptions) => {
    setPageData(nextOptions.map(({children, ...firstLvlData}) => ({
      ...firstLvlData,
      children: children.map(({children: secondLvlChildren, ...secondLvlData}) => ({
        ...secondLvlData,
        children: new Map(secondLvlChildren.reduce((acc, item) => {
          if (item.children.length > 0) {
            acc.push({...item, name: item.children[0].nameGroup})
          }
          return acc
        }, []).map((v) => [v.name, v]))
      }))
    })))
  }, [dictionaryGroup, setPageData])

  // переписываем данные дерева с критериями-массивами, а не мапами
  const treeUnwrappedData = useMemo(() => {
    return criteriaData.map(({children, ...firstLvlData}) => ({
      ...firstLvlData,
      children: children.map(({children: secondLvlChildren, ...secondLvlData}) => ({
        ...secondLvlData,
        children: Array.isArray(secondLvlChildren) ? secondLvlChildren : (() => {
          let arrayChildren = []
          secondLvlChildren.forEach(({children: secondLvlChildren, ...secondLvlData}, key) => {
              arrayChildren.push({
                ...secondLvlData,
                children: secondLvlChildren.map((item) => ({...item, nameGroup: key}))
              })
            }
          )
          return arrayChildren
        })()
      }))
    }))
  }, [criteriaData])

// собираем список буфера
  const editListBuffer = useCallback(() => {
    setTitleBuffer(title)
    setListBuffer(checkedObject)
  }, [checkedObject, title])

  return (
    <div className="relative flex-container">
      <TipsOverlayComponent>
        {({renderTips, destroyTips}) => (
          <div className="flex">
            <OpenStateForWindows>
              {({windowState, openWindow, closeWindow}) => (
                <div>
                  <InformationCardMin
                    onMouseEnter={renderTips({ text: "Выбор даты или периода" })}
                    onMouseLeave={destroyTips}
                    onClick={openWindow}
                    className="mr-1"
                  >
                    <BsCalendar/>
                  </InformationCardMin>
                  {windowState && <ThemedContextMenu onClose={closeWindow} width={320}>
                    <StateFullForm
                      initPayload={tabState}
                      onSubmit={(...v) => {
                        updateTabState(...v)
                        closeWindow()
                      }}
                      fields={editDateRangeConfig}
                    />
                  </ThemedContextMenu>}
                </div>
              )}
            </OpenStateForWindows>

            <OpenStateForWindows>
              {({windowState, openWindow, closeWindow}) => (
                <div>
                  <InformationCardMin
                    onMouseEnter={renderTips({ text: "Выбор интервального диапазона" })}
                    onMouseLeave={destroyTips}
                    onClick={openWindow}
                    className="mr-1"
                  >
                    <BsCalendar3/>
                  </InformationCardMin>
                  {windowState && <ThemedContextMenu onClose={closeWindow} width={320}>
                    <StateFullForm
                      initPayload={tabState}
                      onSubmit={(...v) => {
                        updateTabState(...v)
                        closeWindow()
                      }}
                      fields={editIntervalRangeConfig}
                    />
                  </ThemedContextMenu>}
                </div>
              )}
            </OpenStateForWindows>

            <OpenStateForWindows>
              {({windowState, openWindow, closeWindow}) => (
                <div>
                  <InformationCardMin
                    onMouseEnter={renderTips({ text: "Выбор временных интервалов" })}
                    onMouseLeave={destroyTips}
                    onClick={openWindow}
                  >
                    <BsCalendar3Range/>
                  </InformationCardMin>
                  {windowState && <ThemedContextMenu onClose={closeWindow} width={320}>
                    <StateFullForm
                      initPayload={tabState}
                      onSubmit={(...v) => {
                        updateTabState(...v)
                        closeWindow()
                      }}
                      fields={editTimeRangeConfig}
                    />
                  </ThemedContextMenu>}
                </div>
              )}
            </OpenStateForWindows>
          </div>
        )}
      </TipsOverlayComponent>

      <>
        <div className="flex mt-2.5 flex-wrap">
          {listDirectory.map(({id, name, active}) => (
              <CardForDirectory
                key={id}
                active={active}
                onClick={() => setNameSelect(name)}
              >
                {name}
              </CardForDirectory>
            )
          )}
        </div>
        <GridContainer className="relative overflow-hidden h-full">
          <CheckboxGroupContainer>
            <CheckboxGroupStyle
              id="selector"
              options={selectedList}
              valueKey="id"
              title={title}
              labelKey="title"
              value={checkedObject}
              returnObjects
              onInput={setCheckedObject}
            />
            {selectedList.length > 0 &&
              <div className="flex items-center mt-3">
                <GoldButton
                  className="w-36 mr-2"
                  onClick={setNewTree}
                >
                  применить
                </GoldButton>
                <GoldButton
                  className="w-36"
                  onClick={editListBuffer}
                >
                  В буфер
                </GoldButton>
              </div>
            }
          </CheckboxGroupContainer>
          <div className="separator-left pl-4 mb-4 overflow-hidden">
            <ScrollBar>
              <Tree
                defaultExpandAll
                onSelect={onSelect}
                options={treeUnwrappedData}
                selectRule={selectRule}
                selectedNode={idSelectedNode}
                onUpdateOptions={onUpdateOptions}
                rowComponent={RowComponent}
              />
            </ScrollBar>
          </div>
          <div className="separator-left pl-4 mb-4 overflow-hidden">
            <div className="mb-2.5 flex items-center">
              <h3 className="pb-0">Буфер</h3>
              {titleBuffer && listBuffer.length > 0 && (
                <OpenStateForWindows>
                  {({windowState, openWindow, closeWindow}) => (
                    <>
                      <StyleIcon title="Удалить буфер" className="ml-1.5" onClick={openWindow} icon={basketTrash}/>
                      {windowState && <ThemedContextMenu onClose={closeWindow} width={220}>
                        <ButtonsForDelete
                          title={"Удалить весь буфер?"}
                          onClose={closeWindow}
                          onSubmit={() => {
                            closeWindow()
                            setListBuffer([])
                          }}
                        />
                      </ThemedContextMenu>}
                    </>
                  )}
                </OpenStateForWindows>
              )}
            </div>
            {titleBuffer && listBuffer.length > 0 && (
              <div>{titleBuffer}:</div>
            )}
            <ScrollBar>
              <Tree
                defaultExpandAll
                options={listBuffer}
                rowComponent={BufferComponent}
                onUpdateOptions={setListBuffer}
              />
            </ScrollBar>
          </div>
        </GridContainer>
      </>
    </div>
  );
};

SelectionCriteria.propTypes = {
  tabState: PropTypes.object.isRequired,
  updateTabState: PropTypes.func.isRequired,
};

export default SelectionCriteria;
