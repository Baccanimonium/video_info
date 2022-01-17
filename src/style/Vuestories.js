import { storiesOf } from "@storybook/vue"

const vuestories = storiesOf("style", module)

vuestories.add("css.colors.css", () => ({
  render () {
    return (
      <div style="display: flex">
        <div style="padding: 20px; background-color: aliceblue; width: 20%; margin: 20px">
          <div class="bg-color-white" style="width: 200px; height: 50px; display: flex; align-items: center; justify-content: center;">
        bg-color-bg-color-white
          </div>
          <div class="bg-color-greyDarken" style="width: 200px; height: 50px; display: flex; align-items: center; justify-content: center;">
          bg-color-greyDarken
          </div>
          <div class="bg-color-blackDarken-2" style="width: 200px; height: 50px; display: flex; align-items: center; justify-content: center;">
          bg-color-blackDarken-2
          </div>
          <div class="bg-color-greyDarken-3" style="width: 200px; height: 50px; display: flex; align-items: center; justify-content: center;">
          bg-color-greyDarken-3
          </div>
          <div class="bg-color-greyDarken-5" style="width: 200px; height: 50px; display: flex; align-items: center; justify-content: center;">
          bg-color-greyDarken-5
          </div>
          <div class="bg-color-greyLight-1" style="width: 200px; height: 50px; display: flex; align-items: center; justify-content: center;">
          bg-color-greyLight-1
          </div>
          <div class="bg-color-greyLight-4" style="width: 200px; height: 50px; display: flex; align-items: center; justify-content: center;">
          bg-color-greyLight-4
          </div>
          <div class="bg-color-greyLight-2" style="width: 200px; height: 50px; display: flex; align-items: center; justify-content: center;">
          bg-color-greyLight-2
          </div>
          <div class="bg-color-lightGold" style="width: 200px; height: 50px; display: flex; align-items: center; justify-content: center;">
          bg-color-lightGold
          </div>
          <div class="bg-color-transparent" style="width: 200px; height: 50px; display: flex; align-items: center; justify-content: center;">
          bg-color-transparent
          </div>
          <div class="bg-color-blackDarken-1" style="width: 200px; height: 50px; display: flex; align-items: center; justify-content: center; color: white;">
          bg-color-blackDarken-1
          </div>
        </div>
        <div style="padding: 20px; background-color: #9e8bde; width: 20%; margin: 20px">
          <div class="text-grey" style="width: 200px; height: 50px; display: flex; align-items: center; justify-content: center; font-weight: bold;">
            text-grey
          </div>
          <div class="text-white" style="width: 200px; height: 50px; display: flex; align-items: center; justify-content: center; font-weight: bold;">
            text-white
          </div>
          <div class="color-greyDarken" style="width: 200px; height: 50px; display: flex; align-items: center; justify-content: center; font-weight: bold;">
            color-greyDarken
          </div>
          <div class="color-greyDarken-1" style="width: 200px; height: 50px; display: flex; align-items: center; justify-content: center; font-weight: bold;">
            color-greyDarken-1
          </div>
          <div class="color-blackDarken-2" style="width: 200px; height: 50px; display: flex; align-items: center; justify-content: center; font-weight: bold;">
            color-blackDarken-2
          </div>
          <div class="color-greyDarken-5" style="width: 200px; height: 50px; display: flex; align-items: center; justify-content: center; font-weight: bold;">
            color-greyDarken-5
          </div>
          <div class="color-greyLight-1" style="width: 200px; height: 50px; display: flex; align-items: center; justify-content: center; font-weight: bold;">
            color-greyLight-1
          </div>
          <div class="color-greyLight-4" style="width: 200px; height: 50px; display: flex; align-items: center; justify-content: center; font-weight: bold;">
            color-greyLight-4
          </div>
          <div class="color-greyLight-6" style="width: 200px; height: 50px; display: flex; align-items: center; justify-content: center; font-weight: bold;">
            color-greyLight-6
          </div>
          <div class="color-blackDarken-1" style="width: 200px; height: 50px; display: flex; align-items: center; justify-content: center; font-weight: bold;">
            color-blackDarken-1
          </div>
          <div class="color-blackDarken-2" style="width: 200px; height: 50px; display: flex; align-items: center; justify-content: center; font-weight: bold;">
            color-blackDarken-2
          </div>
          <div class="color-grey" style="width: 200px; height: 50px; display: flex; align-items: center; justify-content: center; font-weight: bold;">
            color-grey
          </div>
          <div class="color-lightGold" style="width: 200px; height: 50px; display: flex; align-items: center; justify-content: center; font-weight: bold;">
            color-lightGold
          </div>
          <div class="color-gold" style="width: 200px; height: 50px; display: flex; align-items: center; justify-content: center; font-weight: bold;">
            color-gold
          </div>
          <div class="color-pink" style="width: 200px; height: 50px; display: flex; align-items: center; justify-content: center; font-weight: bold;">
            color-pink
          </div>
          <div class="color-white" style="width: 200px; height: 50px; display: flex; align-items: center; justify-content: center; font-weight: bold;">
            color-white
          </div>
        </div>
      </div>
    )
  }
}))
vuestories.add("fonts.css", () => ({
  render () {
    return (
      <div style="display: flex; margin: 50px; justify-content: space-around;">
        <div>
          <div style="font-family: GothamPro; font-style: normal; font-weight: 400;">GothamPro</div>
          <div style="font-family: GothamPro; font-style: normal;">font-style: normal;</div>
          <div style="font-family: GothamPro; font-style: normal; font-weight: 300;">font-style: normal; font-weight: 300;</div>
        </div>
        <div>
          <div style="font-family: GothamNarrow; font-style: normal; font-weight: 400;">GothamNarrow</div>
          <div style="font-family: GothamNarrow; font-style: normal; font-weight: 900;">font-style: normal; font-weight: 900;</div>
          <div style="font-family: GothamNarrow; font-style: normal; font-weight: 300;">font-style: normal; font-weight: 300;</div>
        </div>
      </div>
    )
  }
}))
vuestories.add("hoverEffects.css", () => ({
  render () {
    return (
      <div style="display: flex; margin: 50px;">
        <button class="transition-grey-gold" >transition-grey-gold</button>
        <button class="transition-black-gold" >transition-black-gold</button>
        <button class="transition-grey-black" >transition-grey-black</button>
        <button class="dragging" >transition-grey-gold</button>
        <button class="gray-hover" >transition-grey-gold</button>
      </div>
    )
  }
}))
vuestories.add("misc.css", () => ({
  render () {
    return (
      <div style="display: flex; margin: 20px;">
        <div>
          <div class="b-r-0" style="background-color: burlywood; padding: 10px; margin: 10px" >
            b-r-0
          </div>
          <div class="b-r-2" style="background-color: burlywood; padding: 10px; margin: 10px" >
            b-r-2
          </div>
          <div class="b-r-4" style="background-color: burlywood; padding: 10px; margin: 10px" >
            b-r-4
          </div>
          <div class="b-r-0" style="background-color: burlywood; padding: 10px; margin: 10px" >
            b-r-5
          </div>
          <div class="b-r-50percent" style="background-color: burlywood; padding: 10px; margin: 10px" >
            b-r-50percent
          </div>
        </div>
        <div style="background-color: white">
          <div class="separator-top" style="background-color: aliceblue; padding: 10px; margin: 10px">
            separator-top
          </div>
          <div class="separator-bot" style="background-color: aliceblue; padding: 10px; margin: 10px">
            separator-bot
          </div>
          <div class="separator-bot-greyLight" style="background-color: #fffcfc; padding: 10px; margin: 10px">
            separator-bot-greyLight
          </div>
        </div>
        <div style="width: 300px; height: 300px; background-color: aliceblue;">
          <div class="w-100" style="background-color: burlywood; margin: 10px 0">
            w-100
          </div>
          <div class="h-100" style="background-color: burlywood; margin: 0 10px">
            h-100
          </div>
        </div>
      </div>
    )
  }
}))
vuestories.add("style-btn.css", () => ({
  render () {
    return (
      <div >
        <div style="display: flex; margin: 50px; flex-direction: column; align-items: flex-start; background-color: antiquewhite;">
          <button class="btn" >btn</button>
          <button class="btn grey-bg" >btn.grey-bg</button>
          <button class="btn light-grey" >btn.light-grey</button>
          <button class="btn golden" >btn.golden</button>
          <button class="btn black-btn" >btn.black-btn</button>
          <button class="btn min-button golden" >min</button>
          <button class="btn disabled" >btn.disabled</button>
          <button class="btn width-midi golden" >btn.width-midi</button>
          <button class="btn width-medium golden" >btn.width-medium</button>
          <button class="btn width-max golden" >btn.width-max</button>
          <button class="tmr-btn btn width-max golden" >
            <div class="load-track" />
            <div class="text">tmr-btn</div>
          </button>
          <button class="save-btn" >save-btn</button>
        </div>
      </div>
    )
  }
}))
vuestories.add("style-global-components.css", () => ({
  render () {
    return (
      <div>
        <div class="page-bar">page-bar</div>
        <div class="page-bar second">page-bar second</div>
        <div style="padding: 20px; display: flex; justify-content: space-around;">
          <div>
            <div style="display: flex; align-items: center;">
            round-icon
              <div class="round-icon"/>
            </div>
            <div style="display: flex; align-items: center;">
            rectangle-icon-icon
              <div class="rectangle-icon"/>
            </div>
            <div style="display: flex; align-items: center;">
            min-gold-button
              <button class="min-gold-button">
                <div class="icon">text</div>
              </button>
            </div>
            <div style="display: flex; align-items: center;">
              <button>
              rotatable
                <div class="rotatable-icon open">icon</div>
              </button>
            </div>
          </div>
          <div style="display: flex; flex-direction: column; justify-content: space-around;">
            <div class="gold-text">gold-text</div>
            <div class="gold-underline">gold-underline</div>
            <div class="button-status">
              <div class="title-status">
                button-status
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}))
vuestories.add("style-modal.css", () => ({
  render () {
    return (
      <div style="display: flex; justify-content: center;">
        <div class="v-dialog">
          <div class="v-card">
            <div class="title-dialog">
              title-dialog
            </div>
            <div class="dialog-img" style="background-color: antiquewhite; display: flex; justify-content: center;">
              <div>
                dialog-img
              </div>
            </div>
            <button class="close-btn">
              close-btn
            </button>
          </div>
        </div>
      </div>
    )
  }
}))
