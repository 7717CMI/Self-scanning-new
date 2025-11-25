import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ThreeLevelNode {
  level2: string
  level3Options: string[]
}

interface ThreeLevelHierarchicalFilterProps {
  label: string
  data: { [key: string]: ThreeLevelNode[] }
  value: {
    level1: string[]
    level2: string[]
    level3: string[]
  }
  onChange: (value: {
    level1: string[]
    level2: string[]
    level3: string[]
  }) => void
}

export function ThreeLevelHierarchicalFilter({ label, data, value, onChange }: ThreeLevelHierarchicalFilterProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedLevel1, setExpandedLevel1] = useState<Set<string>>(new Set())
  const [expandedLevel2, setExpandedLevel2] = useState<Set<string>>(new Set())

  const toggleLevel1 = (level1: string) => {
    const newExpanded = new Set(expandedLevel1)
    if (newExpanded.has(level1)) {
      newExpanded.delete(level1)
    } else {
      newExpanded.add(level1)
    }
    setExpandedLevel1(newExpanded)
  }

  const toggleLevel2 = (level2: string) => {
    const newExpanded = new Set(expandedLevel2)
    if (newExpanded.has(level2)) {
      newExpanded.delete(level2)
    } else {
      newExpanded.add(level2)
    }
    setExpandedLevel2(newExpanded)
  }

  const toggleLevel1_Selection = (level1: string) => {
    const newLevel1 = value.level1.includes(level1)
      ? value.level1.filter(l => l !== level1)
      : [...value.level1, level1]
    onChange({ ...value, level1: newLevel1 })
  }

  const toggleLevel2_Selection = (level2: string) => {
    const newLevel2 = value.level2.includes(level2)
      ? value.level2.filter(l => l !== level2)
      : [...value.level2, level2]
    onChange({ ...value, level2: newLevel2 })
  }

  const toggleLevel3_Selection = (level3: string) => {
    const newLevel3 = value.level3.includes(level3)
      ? value.level3.filter(l => l !== level3)
      : [...value.level3, level3]
    onChange({ ...value, level3: newLevel3 })
  }

  const selectedCount = value.level1.length + value.level2.length + value.level3.length

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-white dark:bg-navy-card border-2 border-gray-300 dark:border-navy-light rounded-lg text-left flex items-center justify-between hover:border-electric-blue dark:hover:border-cyan-accent transition-colors"
      >
        <span className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">
          {label}
          {selectedCount > 0 && (
            <span className="ml-2 px-2 py-0.5 bg-electric-blue text-white text-xs rounded-full">
              {selectedCount}
            </span>
          )}
        </span>
        <ChevronDown
          className={`text-text-secondary-light dark:text-text-secondary-dark transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          size={20}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 mt-2 w-full bg-white dark:bg-navy-card border-2 border-gray-300 dark:border-navy-light rounded-lg shadow-xl max-h-96 overflow-y-auto"
          >
            <div className="p-2">
              {Object.entries(data).map(([level1, nodes]) => (
                <div key={level1} className="mb-2">
                  {/* Level 1 */}
                  <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-navy-light rounded-md">
                    <button
                      onClick={() => toggleLevel1(level1)}
                      className="p-0.5"
                    >
                      {expandedLevel1.has(level1) ? (
                        <ChevronDown size={16} className="text-text-secondary-light dark:text-text-secondary-dark" />
                      ) : (
                        <ChevronRight size={16} className="text-text-secondary-light dark:text-text-secondary-dark" />
                      )}
                    </button>
                    <input
                      type="checkbox"
                      checked={value.level1.includes(level1)}
                      onChange={() => toggleLevel1_Selection(level1)}
                      className="rounded border-gray-300 text-electric-blue focus:ring-electric-blue"
                    />
                    <span className="text-sm font-semibold text-text-primary-light dark:text-text-primary-dark">
                      {level1}
                    </span>
                  </div>

                  {/* Level 2 */}
                  <AnimatePresence>
                    {expandedLevel1.has(level1) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-6"
                      >
                        {nodes.map((node) => (
                          <div key={node.level2} className="mb-1">
                            <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-navy-light rounded-md">
                              {node.level3Options.length > 0 && (
                                <button
                                  onClick={() => toggleLevel2(node.level2)}
                                  className="p-0.5"
                                >
                                  {expandedLevel2.has(node.level2) ? (
                                    <ChevronDown size={14} className="text-text-secondary-light dark:text-text-secondary-dark" />
                                  ) : (
                                    <ChevronRight size={14} className="text-text-secondary-light dark:text-text-secondary-dark" />
                                  )}
                                </button>
                              )}
                              {node.level3Options.length === 0 && <div className="w-4" />}
                              <input
                                type="checkbox"
                                checked={value.level2.includes(node.level2)}
                                onChange={() => toggleLevel2_Selection(node.level2)}
                                className="rounded border-gray-300 text-electric-blue focus:ring-electric-blue"
                              />
                              <span className="text-sm text-text-primary-light dark:text-text-primary-dark">
                                {node.level2}
                              </span>
                            </div>

                            {/* Level 3 */}
                            <AnimatePresence>
                              {expandedLevel2.has(node.level2) && node.level3Options.length > 0 && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="ml-6"
                                >
                                  {node.level3Options.map((level3) => (
                                    <div
                                      key={level3}
                                      className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-navy-light rounded-md"
                                    >
                                      <div className="w-4" />
                                      <input
                                        type="checkbox"
                                        checked={value.level3.includes(level3)}
                                        onChange={() => toggleLevel3_Selection(level3)}
                                        className="rounded border-gray-300 text-electric-blue focus:ring-electric-blue"
                                      />
                                      <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                                        {level3}
                                      </span>
                                    </div>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
