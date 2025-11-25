import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface HierarchicalNode {
  category: string
  subCategories: string[]
}

interface HierarchicalFilterProps {
  label: string
  data: { [key: string]: HierarchicalNode[] }
  value: {
    types: string[]
    categories: string[]
    subCategories: string[]
  }
  onChange: (value: {
    types: string[]
    categories: string[]
    subCategories: string[]
  }) => void
}

export function HierarchicalFilter({ label, data, value, onChange }: HierarchicalFilterProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedTypes, setExpandedTypes] = useState<Set<string>>(new Set())
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set())

  const toggleType = (type: string) => {
    const newExpanded = new Set(expandedTypes)
    if (newExpanded.has(type)) {
      newExpanded.delete(type)
    } else {
      newExpanded.add(type)
    }
    setExpandedTypes(newExpanded)
  }

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(category)) {
      newExpanded.delete(category)
    } else {
      newExpanded.add(category)
    }
    setExpandedCategories(newExpanded)
  }

  const toggleType_Selection = (type: string) => {
    const newTypes = value.types.includes(type)
      ? value.types.filter(t => t !== type)
      : [...value.types, type]
    onChange({ ...value, types: newTypes })
  }

  const toggleCategory_Selection = (category: string) => {
    const newCategories = value.categories.includes(category)
      ? value.categories.filter(c => c !== category)
      : [...value.categories, category]
    onChange({ ...value, categories: newCategories })
  }

  const toggleSubCategory_Selection = (subCategory: string) => {
    const newSubCategories = value.subCategories.includes(subCategory)
      ? value.subCategories.filter(s => s !== subCategory)
      : [...value.subCategories, subCategory]
    onChange({ ...value, subCategories: newSubCategories })
  }

  const selectedCount = value.types.length + value.categories.length + value.subCategories.length

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
              {Object.entries(data).map(([type, nodes]) => (
                <div key={type} className="mb-2">
                  {/* Type Level */}
                  <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-navy-light rounded-md">
                    <button
                      onClick={() => toggleType(type)}
                      className="p-0.5"
                    >
                      {expandedTypes.has(type) ? (
                        <ChevronDown size={16} className="text-text-secondary-light dark:text-text-secondary-dark" />
                      ) : (
                        <ChevronRight size={16} className="text-text-secondary-light dark:text-text-secondary-dark" />
                      )}
                    </button>
                    <input
                      type="checkbox"
                      checked={value.types.includes(type)}
                      onChange={() => toggleType_Selection(type)}
                      className="rounded border-gray-300 text-electric-blue focus:ring-electric-blue"
                    />
                    <span className="text-sm font-semibold text-text-primary-light dark:text-text-primary-dark">
                      {type}
                    </span>
                  </div>

                  {/* Category Level */}
                  <AnimatePresence>
                    {expandedTypes.has(type) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-6"
                      >
                        {nodes.map((node) => (
                          <div key={node.category} className="mb-1">
                            <div className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-navy-light rounded-md">
                              {node.subCategories.length > 0 && (
                                <button
                                  onClick={() => toggleCategory(node.category)}
                                  className="p-0.5"
                                >
                                  {expandedCategories.has(node.category) ? (
                                    <ChevronDown size={14} className="text-text-secondary-light dark:text-text-secondary-dark" />
                                  ) : (
                                    <ChevronRight size={14} className="text-text-secondary-light dark:text-text-secondary-dark" />
                                  )}
                                </button>
                              )}
                              {node.subCategories.length === 0 && <div className="w-4" />}
                              <input
                                type="checkbox"
                                checked={value.categories.includes(node.category)}
                                onChange={() => toggleCategory_Selection(node.category)}
                                className="rounded border-gray-300 text-electric-blue focus:ring-electric-blue"
                              />
                              <span className="text-sm text-text-primary-light dark:text-text-primary-dark">
                                {node.category}
                              </span>
                            </div>

                            {/* SubCategory Level */}
                            <AnimatePresence>
                              {expandedCategories.has(node.category) && node.subCategories.length > 0 && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="ml-6"
                                >
                                  {node.subCategories.map((subCat) => (
                                    <div
                                      key={subCat}
                                      className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-navy-light rounded-md"
                                    >
                                      <div className="w-4" />
                                      <input
                                        type="checkbox"
                                        checked={value.subCategories.includes(subCat)}
                                        onChange={() => toggleSubCategory_Selection(subCat)}
                                        className="rounded border-gray-300 text-electric-blue focus:ring-electric-blue"
                                      />
                                      <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                                        {subCat}
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
