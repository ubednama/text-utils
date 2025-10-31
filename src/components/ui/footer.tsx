'use client'

import { motion } from 'framer-motion'
import { StatItem } from './stat-item'

interface FooterProps {
  stats: Array<{ label: string; value: number }>
  itemVariants: any
}

export function Footer({ stats, itemVariants }: FooterProps) {
  return (
    <motion.footer 
      className="px-6 py-3 bg-gray-900 border-t border-gray-800 flex justify-between items-center text-sm text-gray-400 flex-shrink-0"
      variants={itemVariants}
    >
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {stats.map((stat) => (
          <StatItem key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </div>
      <div className="text-xs hidden sm:block">
        Built with ❤️ by <a href="https://github.com/ubednama" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors underline">ubednama</a>
      </div>
    </motion.footer>
  )
}