import Vue from "vue"
import Icon from "@/components/Icon"

import { caretIcon } from "@/icons/caretIcon"

const CaretIcon = Icon(caretIcon)

// декоратор для добавления внутрь компонента кнопки
export default (Icon, name = "Icon") => Vue.component(`WithCaret${name}`, {
  functional: true,
  render(h, { data: { attrs, listeners }, children: ch }) {
    return (
      <div
        className="relative"
        on={listeners}
      >
        <Icon attrs={attrs} />
        <CaretIcon
          size="8"
          className={`icon-caret ${attrs.open ? "open" : ""}`}
        />
      </div>
    )
  }
})
