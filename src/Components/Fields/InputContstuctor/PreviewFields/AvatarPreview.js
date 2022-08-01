import React from "react"
import PropTypes from "prop-types"
import RoundButton from "@/Components/RoundButtonStyle"
import Avatar from "@/Components/Avatar"

const AvatarContainer = RoundButton.withComponent(Avatar)

const AvatarPreview = ({ value }) => (
  <div className="flex flex-wrap">
    {value.map(({ SYS_NAME, ID, PROFILE_PICTURE }) => (
      <div
        key={ID}
        className="bg-color-greyLight-2 b-r-2 m-b-5 m-r-5 flex items-center p-t-5 p-b-5 p-r-10 p-l-10"
      >
        <AvatarContainer value={PROFILE_PICTURE} />
        <div className="m-l-15">
          { SYS_NAME }
        </div>
      </div>
    ))}
  </div>
)

AvatarPreview.propTypes = {
  value: PropTypes.array,
}

AvatarPreview.defaultProps = {
  value: []
}
export default AvatarPreview
