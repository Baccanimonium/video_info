import { set } from "@/Utils/Objects/ObjectPath"

// TODO необходима реализация мержа данных снапшот + свежие загруженные данные + изменнные данные пользователем

export default function (controller, plugins, { objectPath = "" } = {}) {
  function snapshotWrapper(f) {
    return new Proxy(f, {
      apply: async (target, thisArg, argArray) => {
        const data = await target.apply(thisArg, argArray)
        controller.storeSnapshot(data)
        return data
      }
    })
  }

  controller.loadData = snapshotWrapper(controller.loadData)
  controller.saveData = snapshotWrapper(controller.saveData)

  controller.storeSnapshot = function (snapshot) {
    this.props.updateTabState({ snapshot })
  }.bind(controller)

  controller.attachDataToSnapshot = function ({ snapshot: nextSnapshot, value: nextValue }) {
    const { snapshot, updateTabState, data } = this.props
    updateTabState({
      snapshot: set(objectPath, snapshot, nextSnapshot),
      data: set(objectPath, data, nextValue)
    })
  }.bind(controller)
}
