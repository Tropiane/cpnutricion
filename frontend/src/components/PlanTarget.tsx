export interface TargetData {
  id: number
  title: string
  description: string
  image?: string
  details?: string[]
}

export const PlanTarget = ({
  id,
  title,
  description,
  image,
  details
}: TargetData) => {
  return (
    <div
      key={id}
      className="
        relative
        flex flex-col
        justify-between
        rounded-2xl
        overflow-hidden
        shadow-lg
        transition
        duration-300
        hover:scale-[1.02]
        hover:shadow-2xl
        bg-cover
        bg-center
        min-h-[360px]
      "
      style={{ backgroundImage: image ? `url(${image})` : undefined }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col h-full text-white">
        <div>
          <h2 className="text-2xl font-bold mb-2 tracking-wide">
            {title}
          </h2>

          <p className="text-sm text-gray-200 mb-4 leading-relaxed">
            {description}
          </p>
        </div>

        {details && (
          <ul className="mt-auto space-y-2">
            {details.map((detail, index) => (
              <li
                key={index}
                className="
                  flex items-start gap-2
                  text-sm
                  text-gray-100
                "
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
