import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  AdvertisersList,
  AdvertisingItemsLevel1,
  AdvertisingItemsLevel2,
  AdvertisingItemsLevel3,
  AdvertisingItemsLevel4,
  GroupDictionary, GroupDictionaryParams,
  marking,
  Models,
  nationalTV,
  SubbrandsList,
  treeData,
  TVcompanies,
  TypeOfAdvertisement, dictionary
} from "../mok";
import {CardForDirectory} from "../../../styles";
import {CheckboxGroupContainer, GridContainer} from "./styles";
import CheckboxGroup from "../../../../../Components/Fields/CheckboxGroup";
import BsButton from "@/Components/BsButton";
import RowComponent from "../../../Components/RowComponent";
import ScrollBar from "react-perfect-scrollbar";
import Tree from '@/component_ocean/Components/Tree';
import {listDirectory} from "../../../config"
import BufferComponent from "@/Pages/NewTask/Components/BufferComponent";
import {StyleIcon} from "@/Components/styleIcon";
import {basketTrash} from "@/Icons/basketTrash";
import WithOpenContextMenu from "@/Core/RenderProps/WithOpenContextMenu";
import ButtonsForDelete from "@/Pages/NewTask/Components/ButtonsForDelete";
import PureUpdateArrayItems from "@/Utils/Arrays/PureUpdateArrayItems";

const creatingArrayFromMap = (children) => {
  let arrayChildren = []
  children.forEach(({children: secondLvlChildren, ...secondLvlData}, key) => {
      arrayChildren.push({
        ...secondLvlData,
        children: secondLvlChildren.map((item) => [{...item, nameGroup: key}]).flat()
      })
    }
  )
  return arrayChildren
}

const SelectionCriteriaForNewTask = () => {
  const [selectedList, setSelectedList] = useState([])
  const [title, setTitle] = useState("")
  const [dictionaryGroup, setDictionaryGroup] = useState("")
  const [checkedObject, setCheckedObject] = useState([])
  const [pageData, setPageData] = useState(treeData)
  const [nameSelect, setNameSelect] = useState("")

  const [listBuffer, setListBuffer] = useState([])
  const [titleBuffer, setTitleBuffer] = useState("")

  const [idSelectedNode, setIdSelectedNode] = useState("123123")
  const [indexAllocateNode, setIndexAllocateNode] = useState(0)

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
    setCheckedObject(pageData[0]?.children[indexAllocateNode]?.children.get(dictionaryGroup)?.children || [])
  }, [nameSelect, pageData, indexAllocateNode])

  useEffect(() => {
    setIndexAllocateNode(pageData[0].children.findIndex(({id}) => id === idSelectedNode))
  }, [idSelectedNode])

  const setNewTree = useCallback(() => {
    // добавление критериев в выделенный узел
    // когда нет второго уровня
    if (pageData[0].children.length === 0) {
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
        ...pageData}
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
          ...pageData,
          // в children записываем данные второго уровня по индексу выделенного узла
          children: PureUpdateArrayItems(lvSecondChildren, indexAllocateNode, {...secondLvlChildrenData, children: newChildren})
        }]
      })
    }
  }, [dictionaryGroup, checkedObject, pageData])

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
  }, [dictionaryGroup])
// назначаем что будет выделяться в узле
  const selectRule = ({type}) => type === "block"

  // переписываем данные дерева с критериями-массивами, а не мапами
  const treeUnwrappedData = useMemo(() => {
    return pageData.map(({children, ...firstLvlData}) => ({
      ...firstLvlData,
      children: children.map(({children: secondLvlChildren, ...secondLvlData}) => ({
        ...secondLvlData,
        children: Array.isArray(secondLvlChildren) ? secondLvlChildren : creatingArrayFromMap(secondLvlChildren)
      }))
    }))
  }, [pageData])

// собираем список буфера
  const editListBuffer = useCallback(() => {
    setTitleBuffer(title)
    setListBuffer(checkedObject)
  }, [checkedObject, title])
// удаление одного буфера
  const onUpdateBufferList = useCallback((value) => {
    console.log(value)
  }, [dictionaryGroup])
// удаление всего буфера
  const handleInitDelete = useCallback(({applyContextMenu, e}) => {
    e.stopPropagation()
    e.preventDefault()
    applyContextMenu([{
      component: ({onClose, title, onSubmit}) => {
        return <ButtonsForDelete title={title} onClose={onClose} onSubmit={onSubmit}/>
      },
      componentProps: {
        onSubmit: () => setListBuffer([]),
        title: "Удалить весь буфер?",
      }
    }])
  }, [])

  return (
    <>
      <div className="display-flex m-t-10 flex-wrap">
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
      <GridContainer className="pos-relative overflow-hidden h-100">
        <CheckboxGroupContainer>
          <CheckboxGroup
            options={selectedList}
            valueKey="id"
            blockTitle={title}
            labelKey="title"
            value={checkedObject}
            returnObjects
            onInput={setCheckedObject}
          />
          {selectedList.length > 0 &&
          <div className="display-flex a-i-center">
            <BsButton
              type="button"
              className="golden btn sign-up-btn color-greyDarken w-18 m-r-5"
              onClick={setNewTree}
            >
              применить
            </BsButton>
            <BsButton
              type="button"
              className="golden btn sign-up-btn color-greyDarken w-18"
              onClick={editListBuffer}
            >
              В буфер
            </BsButton>
          </div>
          }
        </CheckboxGroupContainer>
        <div className="separator-left p-l-15 m-b-15 overflow-hidden">
          <ScrollBar>
            <Tree
              showLine
              draggable
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
        <div className="separator-left p-l-15 m-b-15 overflow-hidden">
          <div className="m-b-10 display-flex a-i-center">
            <h3 className="p-b-0">Буфер</h3>
            {titleBuffer && listBuffer.length > 0 && (
              <WithOpenContextMenu
                settings={{maxSize: "150", minSize: "150"}}
                onOpenContextMenu={handleInitDelete}
              >
                {(onOpenContextMenu) => (
                  <StyleIcon title="Удалить буфер" className="m-l-5" onClick={onOpenContextMenu} icon={basketTrash}/>
                )}
              </WithOpenContextMenu>
            )}
          </div>
          {titleBuffer && listBuffer.length > 0 && (
            <div>{titleBuffer}:</div>
          )}
          <ScrollBar>
            <Tree
              showLine
              draggable
              defaultExpandAll
              onSelect={onSelect}
              options={listBuffer}
              selectRule={selectRule}
              onUpdateOptions={onUpdateBufferList}
              rowComponent={BufferComponent}
            />
          </ScrollBar>
        </div>
      </GridContainer>
    </>
  );
};

export default SelectionCriteriaForNewTask;
