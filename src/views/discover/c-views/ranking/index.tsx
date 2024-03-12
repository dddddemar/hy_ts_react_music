import React from 'react'
import type { ReactNode, FC } from 'react'
import { memo } from 'react'

interface Iprops {
  children?: ReactNode
}
const Ranking: FC<Iprops> = () => {
  return (
    <div>
      <div> Ranking</div>
    </div>
  )
}

export default memo( Ranking )
 