'use client'

interface StatItemProps {
  label: string
  value: number
}

export function StatItem({ label, value }: StatItemProps) {
  return (
    <span>
      {label}: <span className="text-white font-medium">{value}</span>
    </span>
  )
}