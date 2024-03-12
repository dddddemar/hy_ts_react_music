import React from 'react'
import type { ReactNode, FC } from 'react'
import { memo } from 'react'

interface Iprops {
  children?: ReactNode
}
const Focus: FC<Iprops> = () => {
  return (
    <div>
      <div> Focus</div>
    </div>
  )
}

export default memo( Focus )
 