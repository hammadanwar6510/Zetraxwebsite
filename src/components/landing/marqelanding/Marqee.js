import React from 'react'
import './marqee.scss'

const Marqee = () => {
  return (
    <>
          <section className="marqueelines">
              <div className="cntchldmarquee">
                  <p className='marqueeparagraph'>
                  <img className='img-fluid' src="\assets\svgmarque.svg" alt="" />

                      Real-time threat detection</p>
              </div>
              <div className="cntchldmarquee">
                  <p className='marqueeparagraph'>
                      <img className='img-fluid' src="\assets\svgmarqueetwo.svg" alt="" />

                      Real-time threat detection</p>
              </div>
              <div className="cntchldmarquee">
                  <p className='marqueeparagraph'>
                    <img className='img-fluid' src="\assets\svgmarqueethree.svg" alt="" />

                      Real-time threat detection</p>
              </div>
          </section>
    </>
  )
}

export default Marqee