'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonGroupProps {
  children: ReactNode
  className?: string
  title?: string
}

export function ButtonGroup({ children, className, title }: ButtonGroupProps) {
  return (
    <div className={cn('mb-4', className)}>
      {title && (
        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{title}</h3>
      )}
      <div className="flex flex-wrap items-center gap-2 p-3 bg-gray-100 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
        {children}
      </div>
    </div>
  )
}