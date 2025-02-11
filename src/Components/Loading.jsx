import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const LoadingEffect = () => {
  const [loading, setLoading] = useState(0)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading((prev) => {
        if (prev < 100) return prev + 1
        clearInterval(interval)
        return 100
      })
    }, 30)

    // Preload video
    const videoElement = document.createElement('video')
    videoElement.src = '/public/Loading.mp4'
    videoElement.onloadeddata = () => setIsVideoLoaded(true)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-gray-900 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {isVideoLoaded ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover opacity-30"
            poster="/images/loading-fallback.jpg"
          >
            <source src="/public/Loading.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="absolute inset-0 bg-gray-900/60" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10">
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
      <div className="absolute bottom-10 right-10 text-6xl text-white font-semibold z-10">
        {loading}%
      </div>
    </div>
  )
}

export default LoadingEffect