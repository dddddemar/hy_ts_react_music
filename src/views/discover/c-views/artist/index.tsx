import React from 'react'
import type { ReactNode, FC } from 'react'
import { memo } from 'react'

interface Iprops {
  children?: ReactNode
}
const Artist: FC<Iprops> = () => {
  return (
    <div>
      <div> Artist</div>
    </div>
  )
}

export default memo( Artist )
 