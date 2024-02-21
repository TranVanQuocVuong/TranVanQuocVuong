import React, {useCallback, memo} from 'react'

function UseCallback() {
    console.log("callback được gọi");
  return (
    <>
        UseCallback
    </>
  )
}
export default memo(UseCallback)
