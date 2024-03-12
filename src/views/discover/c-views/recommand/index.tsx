import React from 'react'
import type { ReactNode, FC } from 'react'
import { memo } from 'react'

interface Iprops {
  children?: ReactNode
}
// type GetStateFnType = typeof store.getState
// type FnReturnType = ReturnType <GetStateFnType>
const Recommand: FC<Iprops> = () => {
  return (
    <div>
      <div>
        <div>dajiahao</div>
      </div>
    </div>
  )
}

export default memo(Recommand)
