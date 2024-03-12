import React from 'react'
import type { ReactNode, FC } from 'react'
import { memo } from 'react'

interface Iprops {
  children?: ReactNode
}
const DjRadio: FC<Iprops> = () => {
  return (
    <div>
      <div> DjRadio</div>
    </div>
  )
}

export default memo( DjRadio )
 