import React from 'react'
import Lottie from 'lottie-react'
import PropTypes from 'prop-types'

const LottieAnimation = ({ animationData, className = "", ...props }) => {
  // Fallback animation data if none provided
  const fallbackAnimation = {
    v: "5.5.7",
    fr: 29.9700012207031,
    ip: 0,
    op: 90.0000036657751,
    w: 500,
    h: 500,
    nm: "Tech Animation",
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Circle",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [0] }, { t: 89.0000036250072, s: [360] }] },
          p: { a: 0, k: [250, 250, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                d: 1,
                ty: "el",
                s: { a: 0, k: [100, 100] },
                p: { a: 0, k: [0, 0] }
              },
              {
                ty: "st",
                c: { a: 0, k: [0.2, 0.4, 1, 1] },
                o: { a: 0, k: 100 },
                w: { a: 0, k: 4 }
              },
              {
                ty: "tr",
                p: { a: 0, k: [0, 0] },
                a: { a: 0, k: [0, 0] },
                s: { a: 0, k: [100, 100] },
                r: { a: 0, k: 0 },
                o: { a: 0, k: 100 }
              }
            ]
          }
        ],
        ip: 0,
        op: 90.0000036657751,
        st: 0,
        bm: 0
      }
    ]
  }

  return (
    <div className={`lottie-container ${className}`}>
      <Lottie 
        animationData={animationData || fallbackAnimation}
        loop={true}
        autoplay={true}
        {...props}
      />
    </div>
  )
}

LottieAnimation.propTypes = {
  animationData: PropTypes.object,
  className: PropTypes.string
}

export default LottieAnimation
