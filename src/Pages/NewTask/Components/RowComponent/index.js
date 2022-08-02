import React, {useCallback, useState, useMemo} from 'react';
import PropTypes from 'prop-types';
import {basketTrash} from "../../icons/basketTrash"
import Button from "@/component_ocean/Components/Button";
import SubmitContainer from "@/Components/Decorators/SubmitContainer";
import Select from "@/component_ocean/Components/Inputs/Select";
import {CardForCondition, IconPlus} from "./styles"
import {StyleIcon} from "@/Components/styleIcon";
import {GoldButton, LightGrayButton} from "@/Components/Buttons";
import {ThemedContextMenu} from "@/Components/ContextMenus";
import {StateFullForm} from '@/component_ocean/Components/Forms'
import uniqueId from "lodash/uniqueId";
import {AlwaysRenderDropDown} from "@/Components/AlwaysRenderDropDown";

const SelectWithContainer = SubmitContainer(Select)

const addNodeConfig = [
  {
    label: "Доступные узлы",
    id: "nodes",
    component: SelectWithContainer,
    valueKey: "title",
    labelKey: "title",
    returnOption: true,
    DropDownComponent: AlwaysRenderDropDown,
    options: [
      {
        title: "AND",
      },
      {
        title: "OR",
      }
    ]
  }
]
const setConditionStateForm = [
  {
    label: "Доступные узлы",
    id: "condition",
    component: (props) => <SelectWithContainer
      {...props}
      options={useMemo(() => props.formPayload.type === "block" ? [
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
      ], [props.formPayload.type])}
    />,
    valueKey: "condition",
    labelKey: "condition",
    DropDownComponent: AlwaysRenderDropDown,
  }
]

const RowComponent = ({node: {type, condition}, node, children, onInput, onDelete}) => {
  const [contextMenuOpened, setContextMenuFlag] = useState(false)
  const [conditionContextMenu, setConditionContextMenuFlag] = useState(false)
  const toggleModalState = useCallback(() => setContextMenuFlag(s => !s), [])
  const toggleConditionState = useCallback(() => setConditionContextMenuFlag(s => !s), [])

  const setGroupCondition = useCallback(({condition}) => {
    onInput({
      ...node,
      condition
    })
    toggleConditionState()
  }, [node, onInput])

  const createGroupNode = useCallback(({nodes}) => {
    onInput({
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
    })
    toggleModalState()
  }, [node, onInput])

  return (
    <div className="flex items-center">
      {type === "condition" ?
        <CardForCondition>
          AND
        </CardForCondition>
        : condition && (
          <div>
            <GoldButton
              className="pr-2 mr-1.5"
              onClick={toggleConditionState}
            >
              {condition}
            </GoldButton>
            {conditionContextMenu &&
              (<ThemedContextMenu
                width={200}
                onClose={toggleConditionState}
              >
                <StateFullForm
                  fields={setConditionStateForm}
                  onSubmit={setGroupCondition}
                  initPayload={node}
                />
              </ThemedContextMenu>)}
          </div>
        )}
      {children}
      {type === "head" && (
        <div>
          <Button onClick={toggleModalState}>
            <IconPlus title="Добавить узел">
              <svg className="svg-inline--fa fa-code-branch fa-w-12 text-grey" aria-hidden="true" data-prefix="fa"
                   data-icon="code-branch" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                   data-fa-i2svg="">
                <path fill="currentColor"
                      d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"></path>
              </svg>
            </IconPlus>
          </Button>
          {contextMenuOpened &&
            (<ThemedContextMenu
              width={200}
              onClose={toggleModalState}
            >
              <StateFullForm
                fields={addNodeConfig}
                onSubmit={createGroupNode}
              />
            </ThemedContextMenu>)}
        </div>
      )
      }
      {type !== "head" && (
        <div>
          <StyleIcon title="Удалить узел" className="ml-1.5" onClick={toggleModalState} icon={basketTrash}/>
          {contextMenuOpened &&
            (<ThemedContextMenu
              width={220}
              onClose={toggleModalState}
            >
              <div className="flex items-center flex-col py-2">
                <div>{`Удалить ${type === "block" ? 'узел' : type === "condition" ? 'группу' : 'критерий'}?`}</div>
                <div className="flex items-center mt-5 justify-between w-full">
                  <LightGrayButton className="w-24" onClick={onDelete}>Да</LightGrayButton>
                  <GoldButton className="w-24" onClick={toggleModalState}>Нет</GoldButton>
                </div>

              </div>
            </ThemedContextMenu>)}
        </div>
      )}
    </div>
  );
};

RowComponent.propTypes = {
  node: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onInput: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

RowComponent.defaultProps = {
  parent: {}
};

export default RowComponent;
