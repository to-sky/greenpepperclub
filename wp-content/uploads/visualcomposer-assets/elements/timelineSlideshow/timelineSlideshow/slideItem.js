import React from 'react'
import { getService } from 'vc-cake'

const Cook = getService('cook')

export default class SlideItem extends React.Component {
  render () {
    const { getMixin, itemIndex, alignment, backgroundImagePosition, button, customClass, image, metaCustomId, text, timerColor, toggleButton, linkSelector, doPadding } = this.props
    let classes = 'vce-timeline-slideshow-item vc-slick-item'
    let backgroundClasses = 'vce-timeline-slideshow-item-background'
    let customProps = {}

    if (image && image.filter && image.filter !== 'normal') {
      backgroundClasses += ` vce-image-filter--${image.filter}`
    }

    if (typeof customClass === 'string' && customClass) {
      classes += ` ${customClass}`
    }

    if (metaCustomId) {
      customProps.id = metaCustomId
    }

    let mixin = getMixin('backgroundPosition', itemIndex)
    if (mixin && backgroundImagePosition) {
      classes += ` vce-timeline-slideshow-item-background-position--${mixin.selector}`
    }

    mixin = getMixin('timerColor', itemIndex)
    if (mixin && timerColor) {
      classes += ` vce-timeline-slideshow-line-color--${mixin.selector}`
    }

    let buttonOutput = ''
    if (toggleButton) {
      const Button = Cook.get(button)
      buttonOutput = Button ? Button.render(null, false) : null
    }

    let styles = {}
    if (image) {
      styles.backgroundImage = `url(${this.props.getImageUrl(image)})`
    }

    if (alignment) {
      classes += ` vce-timeline-slideshow-item--align-${alignment}`
    }

    let link = ''
    if (linkSelector && linkSelector.url) {
      let { url, title, targetBlank, relNofollow } = linkSelector
      let linkProps = {
        'href': url,
        'title': title,
        'target': targetBlank ? '_blank' : undefined,
        'rel': relNofollow ? 'nofollow' : undefined
      }
      link = <a className='vce-timeline-slideshow-link' {...linkProps} />
    }

    let key = `vce-timeline-slideshow-item-${styles.backgroundImage || 'default-slide'}`

    return <div className={classes} {...customProps} key={key} {...doPadding}>
      <div className={backgroundClasses} style={styles} />
      {link}
      <div className='vce-timeline-slideshow-item-wrap'>
        {text}
        {buttonOutput}
      </div>
      <div className='vce-timeline-slideshow-line' />
    </div>
  }
}
