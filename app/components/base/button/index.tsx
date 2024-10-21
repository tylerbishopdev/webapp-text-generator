import type { FC, MouseEventHandler } from 'react'
import React from 'react'
import Spinner from '@/app/components/base/spinner'

export type IButtonProps = {
  type?: string
  className?: string
  disabled?: boolean
  loading?: boolean
  children: React.ReactNode
  onClick?: MouseEventHandler<HTMLDivElement>
}

const Button: FC<IButtonProps> = ({
  type,
  disabled,
  children,
  className,
  onClick,
  loading = false,
}) => {
  let style = ''
  switch (type) {
    case 'primary':
      style = (disabled || loading) ? 'bg-green-500 cursor-not-allowed text-green-100' : 'bg-green-500 hover:bg-green-500/70 hover:shadow-md font-light tracking-tightcursor-pointer text-green-100 hover:shadow-sm'
      break
    default:
      style = disabled ? 'border-solid border border-gray-200 bg-gray-200 cursor-not-allowed text-gray-800' : 'border-solid border border-gray-200 cursor-pointer text-gray-500 hover:bg-white hover:shadow-sm hover:border-gray-300'
      break
  }

  return (
    <div
      className= {`flex justify-center items-center content-center h-9 leading-5 rounded-lg px-4 py-2 text-base ${style} ${className && className}`
}
onClick = { disabled? undefined: onClick }
  >
  { children }
{/* Spinner is hidden when loading is false */ }
<Spinner loading={ loading } className = '!text-white !h-3 !w-3 !border-2 !ml-1' />
  </div>
  )
}

export default React.memo(Button)
