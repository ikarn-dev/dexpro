import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const LoadingEffect = () => {
  const [loading, setLoading] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading((prev) => {
        if (prev < 100) return prev + 1
        clearInterval(interval)
        return 100
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-gray-900">
      <div className="relative">
        <div className="relative">
          {/* Text Container */}
          <h1 className="text-8xl font-bold" style={{ WebkitTextStroke: '2px white' }}>
            DexPro
            {/* Fill Effect */}
            <div 
              className="absolute inset-0" 
              style={{ 
                WebkitTextFillColor: 'white',
                clipPath: `inset(${100 - loading}% 0 0 0)`
              }}
            >
              DexPro
            </div>
          </h1>
        </div>
      </div>

      {/* Loading Percentage */}
      <div className="absolute bottom-10 right-10 text-6xl text-white font-semibold">
        {loading}%
      </div>
    </div>
  )
}

export default LoadingEffect