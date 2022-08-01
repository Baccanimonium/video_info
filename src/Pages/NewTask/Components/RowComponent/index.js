import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {basketTrash} from "../../icons/basketTrash"
import Button from "@/component_ocean/Components/Button";
import WithOpenContextMenu from "@/Core/RenderProps/WithOpenContextMenu";
import {ContextMenuForm} from "@/Components/Forms/StateFullForm";
import WithSubmitContainerHoc from "@/Core/Decorators/WithSubmitContainerHOC";
import Select from "@/Components/Fields/Select";
import uniqueId from 'lodash/uniqueId'
import {CardForCondition, IconPlus} from "./styles"
import {StyleIcon} from "@/Components/styleIcon";
import {GoldButton, LightGrayButton} from "@/Components/Buttons";

const RowComponent = ({ node: { type, condition }, node, children, onInput, onDelete }) => {

  const openAddForm = useCallback(({e, applyContextMenu }) => {
    e.stopPropagation()
    e.preventDefault()
    applyContextMenu([
      {
        component: ContextMenuForm,
        onSubmit: ({nodes}) => onInput({
          ...node,
          children: [
            ...node.children,
            {
              ...nodes,
              id: uniqueId(),
              children: [],
              type: node.type === "block" ? "condition" : "block",
              title: node.type === "head" ? "" : nodes.title,
              condition: node.type === "head" ? "OR" : "AND"
            }
          ]
        }),
        componentProps: {
          initPayload: {},
          fields: [
            {
              label: "Доступные узлы",
              ID_ENTITY_OBJ: 115,
              id: "nodes",
              component: WithSubmitContainerHoc(Select),
              valueKey: "title",
              labelKey: "title",
              returnOption: true,
              allWaysOpen: true,
              options: type === "block"
                ?  [
                  {
                    title: "Нац.телекомпании",
                  },
                  {
                    title: "Телекомпании",
                  },
                  {
                    title: "Тип рекламы",
                  },
                  {
                    title: "Рекламодатели",
                  },
                  {
                    title: "Марки",
                  },
                  {
                    title: "Суббренды",
                  },
                  {
                    title: "Модели",
                  },
                  {
                    title: "Предметы рекламы уровень 1",
                  },
                  {
                    title: "Предметы рекламы уровень 2",
                  },
                  {
                    title: "Предметы рекламы уровень 3",
                  },
                  {
                    title: "Предметы рекламы уровень 4",
                  },
                  {
                    title: "TV списки",
                  },
                  {
                    title: "Рекламные блоки",
                  },
                ]: [
                  {
                    title: "AND",
                  },
                  {
                    title: "OR",
                  }
                ]
            }
          ]

        }
      }
    ])
  }, [node, onInput])

  const openConditionForm = useCallback(({e, applyContextMenu }) => {
    e.stopPropagation()
    e.preventDefault()
    applyContextMenu([
      {
        component: ContextMenuForm,
        onSubmit: ({condition}) => {
          onInput({
            ...node,
            condition
          })
        },
        componentProps: {
          initPayload: {
            condition: node.condition
          },
          fields: [
            {
              label: "Доступные узлы",
              id: "condition",
              component: WithSubmitContainerHoc(Select),
              valueKey: "condition",
              labelKey: "condition",
              allWaysOpen: true,
              options: type === "block" ? [
                {
                  condition: "AND",
                },
                {
                  condition: "OR",
                },
              ] : [
                {
                  condition: "AND",
                },
                {
                  condition: "OR",
                },
                {
                  condition: "OR NOT",
                },
                {
                  condition: "AND NOT",
                },
              ]
            }
          ]

        }
      }
    ])
  }, [node, onInput])

  const handleInitDelete = useCallback(({applyContextMenu, e}) => {
    e.stopPropagation()
    e.preventDefault()
    applyContextMenu([{
      component: ({onClose, title, onSubmit}) => {
        return <div className="flex items-center flex-col p-4">
          <div>{title}</div>
          <div className="flex items-center mt-5 justify-between w-full">
            <LightGrayButton  onClick={onSubmit}>Да</LightGrayButton>
            <GoldButton onClick={onClose}>Нет</GoldButton>
          </div>

        </div>
      },
      componentProps: {
        onSubmit: onDelete,
        title: `Удалить
         ${type === "block" ? 'узел' : type === "condition" ? 'группу' : 'критерий'}?`,
      }
    }])
  }, [onDelete])

  return (
    <div className="flex items-center">
      {type === "condition" ?
        <CardForCondition>
          AND
        </CardForCondition>
        : <WithOpenContextMenu
          settings={{maxSize: "200", minSize: "200"}}
          onOpenContextMenu={openConditionForm}
        >
          {(onOpenContextMenu) => condition ? (
            <GoldButton
              className="pr-2 btn mr-1.5"
              onClick={onOpenContextMenu}
            >
              {condition}
            </GoldButton>
          ): null}
        </WithOpenContextMenu>
      }
      {children}
      {type === "head" &&
        <WithOpenContextMenu
          settings={{maxSize: "200", minSize: "200"}}
          onOpenContextMenu={openAddForm}
        >
          {(onOpenContextMenu) => (
            <Button  onClick={onOpenContextMenu} >
              <IconPlus className="m-r-15 m-l-15" title="Добавить узел">
                <svg className="svg-inline--fa fa-code-branch fa-w-12 text-grey" aria-hidden="true" data-prefix="fa"
                     data-icon="code-branch" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                     data-fa-i2svg="">
                  <path fill="currentColor"
                        d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"></path>
                </svg>
              </IconPlus>
            </Button>
          )}
        </WithOpenContextMenu>
      }
      {type !== "head" &&
        (<WithOpenContextMenu
          settings={{maxSize: "150", minSize: "150"}}
          onOpenContextMenu={handleInitDelete}
        >
          {(onOpenContextMenu) => (
            <StyleIcon title="Удалить узел" className="m-l-5" onClick={onOpenContextMenu} icon={basketTrash}/>
          )}
        </WithOpenContextMenu>)
      }
    </div>
  );
};

RowComponent.propTypes = {

};

RowComponent.defaultProps = {
  parent: {}
};

export default RowComponent;
