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
} from "../../Tab/Pages/SelectionCriteria/mok";
import {CardForDirectory} from "../styles";
import DataSet from "../../Tab/Pages/SelectionCriteria";
import {CheckboxGroupContainer, GridContainer} from "../../Tab/Pages/SelectionCriteria/styles";
import CheckboxGroup from "../../../Components/Fields/CheckboxGroup";
import BsButton from "@/Components/BsButton";
import RowComponent from "../../Tab/Pages/SelectionCriteria/Components/RowComponent";
import ScrollBar from "react-perfect-scrollbar";
import Tree from '@/Components/Tree';
import {listDirectory} from "../config"
import BufferComponent from "@/Pages/NewTask/Components/BufferComponent";
import {StyleIcon} from "@/Components/styleIcon";
import {basketTrash} from "@/Icons/basketTrash";
import WithOpenContextMenu from "@/Core/RenderProps/WithOpenContextMenu";
import ButtonsForDelete from "@/Pages/NewTask/Components/ButtonsForDelete";

/// чтобы айди в чекбоксах не совпадали нужно добавлять в айди название справочника
// id: "nationalTV/1"

// [
//   {
//     "id": "fdgdsf0gdfg",
//     "title": "TV Media",
//     "type": "head",
//     "children": [
//       {
//         "id": "123123",
//         "title": "",
//         "condition": "AND",
//         "type": "block",
//         "children": {
//        }
//       },
//       {
//         "title": "",
//         "id": "2",
//         "type": "block",
//         "condition": "OR",
//         "children": {}
//       }
//     ]
//   }
// ]

const aaa = (children) => {
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
  const [selectedKey, setSelectedKey] = useState([])
  const [checked, setCheckedKey] = useState("")
  const [nameSelect, setNameSelect] = useState("")

  const [listBuffer, setListBuffer] = useState([])
  const [titleBuffer, setTitleBuffer] = useState("")

  const [selectedNode, setSelectedNode] = useState({
      "id": "123123",
      "title": "",
      "condition": "AND",
      "type": "block",
      "children": []
    })
  const [idSelectedNode, setIdSelectedNode] = useState("123123")

  // {
  //   "id": "123123",
  //   "title": "",
  //   "condition": "AND",
  //   "type": "block",
  //   "children": [
  //     {
  //       "id": "15251",
  //       "title": "Группа",
  //       "type": "condition",
  //       "condition": "AND",
  //       "children": Map()
  // }


  // срабатывает при клике на группу
  const onSelect = useCallback(({node}) => {
    // айди узла node.id
    setIdSelectedNode(node.id)
    setSelectedNode(node)
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
    setCheckedObject(pageData[0]?.children[0]?.children.get(dictionaryGroup)?.children || [])
  }, [nameSelect, pageData])

  useEffect(() => {
    // собираем все критерии узла
    let arrayCriteria = []
    // если данных нет в selectedNode.children
    // то setCheckedObject([])
    selectedNode.children.forEach(({children}) => {
      // в список критериев складываем критерии выбраного узла
      setCheckedObject(arrayCriteria.concat(children))
      // arrayCriteria = arrayCriteria.concat(children)
    })

    // мап по идее не нужен
    // потому что критерии будут всегда браться из узла
    // собираем мап критериев. ключ - айди выбраного узла
    const mapCriteria = new Map()
    mapCriteria.set(idSelectedNode, arrayCriteria)

    // получаем массив критериев по айди
    // console.log(mapCriteria.get(idSelectedNode))
    if(pageData && pageData.length > 0) {
      // onSelect()
      // console.log(4445)
    }
  }, [selectedNode, idSelectedNode])

  const setNewTree = useCallback(() => {
    // когда нет второго уровня
    if (selectedNode.length === 0) {
      let newArr = pageData.map(({children, ...firstLvlData}) => ({
          ...firstLvlData,
          children: [
            {
              id: idSelectedNode,
              title: "",
              condition: "AND",
              type: "block",
              children: new Map().set(dictionaryGroup, {
                ...GroupDictionaryParams[dictionaryGroup],
                children: checkedObject
              })
            }
          ]
        })
      )
      setPageData(newArr)
      // когда нет группы
    } else {
      // в объект выделенного узла кладем критерии
      setSelectedNode(({children}) => {
        const newChildren = new Map(children)
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
        return {
          ...selectedNode,
          children: newChildren
        }
      })
      // добавление критериев в выделенный узел
      // setPageData(([{children, ...pageData}]) => {
      //   const newChild = children.reduce((acc, item) => {
      //     if (item.id === idSelectedNode) {
      //       acc.push(selectedNode)
      //     } else {
      //       acc.push(item)
      //     }
      //     return acc
      //   }, [])
      //   return [{
      //     ...pageData,
      //     children: newChild
      //   }]
      // })

      setPageData(([{
        children:
          // второй узел
          // критерии
          [{children,
            // данные второго узла
            ...secondLvlChildrenData},
            // данные другого второго узла
            ...restChildren
          ],
        // данные первого уровня
        ...pageData
      }]) => {
        // console.log(children, secondLvlChildrenData, restChildren, pageData)

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
          // массив старых данных
          // children.get(dictionaryGroup).children - [{}]
          // checkedObject - [{}]
          // то кладем старые данные и новые
          newChildren.set(dictionaryGroup, {
            ...newChildren.get(dictionaryGroup),
            // тут перезаписывается критерий, если выбран критерий одной и той же группы
            children: checkedObject
          })
        }
        // secondLvlChildrenData данные второго уровня
        console.log(newChildren)
        return [{
          // записываем старые данные,
          ...pageData,
          // в children первого уровня записываем данные второго уровня и его children с данными группы
          children: [{...secondLvlChildrenData, children: newChildren}, ...restChildren]
        }]
      })
    }
  }, [dictionaryGroup, checkedObject, pageData])
  const onDragStart = (info) => {
    console.log("onDragStart", info)
  }
  const onDragEnter = (arg) => {
    console.log("onDragEnter", arg)
  }
  const onDrop = (info) => {
    console.log("onDrop", info)
  }
  const setRowCondition = () => {
    console.log("setRowCondition")
  }
  const onExpand = useCallback(expandedKeys => {
    console.log('onExpand', expandedKeys);
  }, []);
  const onCheck = useCallback((checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  }, []);

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

  const selectRule = ({type}) => type === "block"

  // переписываем данные дерева с критериями-массивами, а не мапами
  const treeUnwrappedData = useMemo(() => {
    return pageData.map(({children, ...firstLvlData}) => ({
      ...firstLvlData,
      children: children.map(({children: secondLvlChildren, ...secondLvlData}) => ({
        ...secondLvlData,
        children: Array.isArray(secondLvlChildren) ? secondLvlChildren : aaa(secondLvlChildren)
      }))
    }))
  }, [pageData])

  // добавление к критерию название справочника
  const checkObject = (value) => {
    const newVal = value.reduce((acc, item) => {
      if (checkedObject.findIndex((i) => i.id === item.id) !== 0) {
        acc.push({...item, title: `${item.title} [${title}]`})
      } else {
        acc.push({...item})
      }
      return acc
    }, [])
    setCheckedObject(newVal)
  }

  const editListBuffer = useCallback(() => {
    setTitleBuffer(title)
    setListBuffer(checkedObject)
  }, [checkedObject, title])

  const onUpdateBufferList = useCallback((value) => {
    console.log(value)
  }, [dictionaryGroup])

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

  const editCheckedObject = useCallback((value) => {
    // value = [{
    // condition: "OR"
    // id: 1
    // title: "N/A"}]
    setCheckedObject(value)
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
            onInput={editCheckedObject}
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
              onDragStart={onDragStart}
              onDragEnter={onDragEnter}
              onDrop={onDrop}
              showLine
              setRowCondition={setRowCondition}
              draggable
              defaultExpandAll
              onExpand={onExpand}
              defaultSelectedKeys={selectedKey}
              defaultCheckedKeys={checked}
              onSelect={onSelect}
              onCheck={onCheck}
              options={treeUnwrappedData}
              selectRule={selectRule}
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
              onDragStart={onDragStart}
              onDragEnter={onDragEnter}
              onDrop={onDrop}
              showLine
              setRowCondition={setRowCondition}
              draggable
              defaultExpandAll
              onExpand={onExpand}
              defaultSelectedKeys={selectedKey}
              defaultCheckedKeys={checked}
              onSelect={onSelect}
              onCheck={onCheck}
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
