import { cn } from "@/lib/utils"

interface BentoGridProps {
  className?: string
  children?: React.ReactNode
}

export const BentoGrid = ({ className, children }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  )
}

interface BentoGridItemProps {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
  href?: string
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  href,
}: BentoGridItemProps) => {
  return (
    <div
      className={cn(
        "group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-transparent bg-gradient-to-br from-white to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 p-6 shadow-md transition-all duration-200 hover:shadow-xl",
        className
      )}
    >
      {header && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
          {icon}
        </div>
      )}
      <div className="transition-all duration-200 group-hover:translate-y-[-5px]">
        {title && (
          <h3 className="mb-2 text-lg font-bold text-neutral-700 dark:text-neutral-200">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            {description}
          </p>
        )}
      </div>
      {href && (
        <div className="mt-4 flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
          Learn more
          <svg
            className="ml-1 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </div>
      )}
    </div>
  )
}
