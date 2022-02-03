import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import Icon from '@/Components/Icon'
import {basketTrash} from "../Icons/basketTrash"
import {CirclePlus} from "../Icons/CirclePlus"
import BsButton from "@/Components/BsButton";
import WithOpenContextMenu from "@/Core/RenderProps/WithOpenContextMenu";
import {ContextMenuForm} from "@/Components/Forms/StateFullForm";
import WithSubmitContainerHoc from "@/Core/Decorators/WithSubmitContainerHOC";
import Select from "@/Components/Fields/Select";
import uniqueId from 'lodash/uniqueId'
import {StyleTrashIcon} from "./styles"

export const TrashIcon = Icon(basketTrash)
export const PlusIcon = Icon(CirclePlus)


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
              type: node.type === "block" ? "condition" : "block"
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
                  },
                  {
                    title: "NOT",
                  },
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
              options: type ? [
                  {
                    condition: "AND",
                  },
                  {
                    condition: "OR",
                  },
                  {
                    condition: "NOT",
                  }
                ] : [
                  {
                    condition: "AND",
                  },
                  {
                    condition: "OR",
                  }
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
        return <div className="display-flex a-i-center flex-column p-15">
          <div>{title}</div>
          <div className="display-flex a-i-center m-t-20 j-c-space-between w-100">
            <BsButton className="btn grey-bg" onClick={onSubmit}>Да</BsButton>
            <BsButton className="btn golden" onClick={onClose}>Нет</BsButton>
          </div>

        </div>
      },
      componentProps: {
        onSubmit: onDelete,
        title: "Удалить узел?",
      }
    }])
  }, [onDelete])

  return (
    <div className="display-flex a-i-center">
      <WithOpenContextMenu
          settings={{maxSize: "200", minSize: "200"}}
          onOpenContextMenu={openConditionForm}
      >
      {(onOpenContextMenu) => condition ? (
        <BsButton
            className="p-r-8"
            onClick={onOpenContextMenu}
        >
          {condition}
        </BsButton>
      ): null}
      </WithOpenContextMenu>
      {children}
      {(type === "block" || type === "head") &&
        <WithOpenContextMenu
          settings={{maxSize: "200", minSize: "200"}}
          onOpenContextMenu={openAddForm}
        >
          {(onOpenContextMenu) => (
            <BsButton className="m-l-5" onClick={onOpenContextMenu}>Добавить узел</BsButton>
          )}
        </WithOpenContextMenu>

      }
      {(type === "block" || type === "condition") &&
      <WithOpenContextMenu
        settings={{maxSize: "150", minSize: "150"}}
        onOpenContextMenu={handleInitDelete}
      >
        {(onOpenContextMenu) => (
          <StyleTrashIcon className="m-l-5" onClick={onOpenContextMenu}/>
        )}
      </WithOpenContextMenu>
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
