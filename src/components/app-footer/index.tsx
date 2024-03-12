import React from 'react'
import type { ReactNode, FC } from 'react'
import { memo } from 'react'

interface Iprops {
  children?: ReactNode
}
const AppFooter: FC<Iprops> = () => {
  return (
    <div>
      <div> AppFooter</div>
    </div>
  )
}

export default memo(AppFooter)
