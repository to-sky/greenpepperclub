import React from 'react'
import classNames from 'classnames'

export default class ProgressBar extends React.Component {
  render () {
    const { colorType, getMixin, itemIndex } = this.props
    const { title, value, titleFont, valueFont, titleElementTag, valueElementTag, titleFontSize, valueFontSize, titleLineHeight, valueLineHeight, titleLetterSpacing, valueLetterSpacing } = this.props.atts
    let containerClasses = [ 'vce-progress-bar-container' ]
    const titleProps = {}
    titleProps.style = {}
    const valueProps = {}
    valueProps.style = {}
    const customProps = {}

    const CustomTitleTag = titleElementTag
    const CustomValueTag = valueElementTag

    let mixin = getMixin('barValue', itemIndex)
    if (mixin) {
      containerClasses.push(`vce-progress-bar--value-${mixin.selector}`)
    }

    mixin = getMixin('barColor', itemIndex)
    if (mixin) {
      let colorClass = `vce-progress-bar--${colorType}-${mixin.selector}`
      containerClasses.push(colorClass)
    }

    mixin = getMixin('barBackgroundColor', itemIndex)
    if (mixin) {
      containerClasses.push(`vce-progress-bar--background-color-${mixin.selector}`)
    }

    containerClasses = classNames(containerClasses)

    if (titleFont) {
      const fontStyle = titleFont.fontStyle ? (titleFont.fontStyle.style === 'regular' ? '' : titleFont.fontStyle.style) : null
      titleProps.style.fontWeight = titleFont.fontStyle ? titleFont.fontStyle.weight : null
      titleProps.style.fontStyle = fontStyle
    }

    if (valueFont && valueFont.status === 'active') {
      const fontStyle = valueFont.fontStyle ? (valueFont.fontStyle.style === 'regular' ? '' : valueFont.fontStyle.style) : null
      valueProps.style.fontWeight = valueFont.fontStyle ? valueFont.fontStyle.weight : null
      valueProps.style.fontStyle = fontStyle
    }

    if (titleFontSize) {
      titleProps.style.fontSize = titleFontSize
    }

    if (valueFontSize) {
      valueProps.style.fontSize = valueFontSize
    }

    if (titleLineHeight) {
      titleProps.style.lineHeight = titleLineHeight
    }

    if (valueLineHeight) {
      valueProps.style.lineHeight = valueLineHeight
    }

    if (titleLetterSpacing) {
      titleProps.style.letterSpacing = titleLetterSpacing
    }

    if (valueLetterSpacing) {
      valueProps.style.letterSpacing = valueLetterSpacing
    }

    customProps[ 'data-vce-count-up-end-value' ] = value || 0
    customProps[ 'data-vce-count-up-start-value' ] = 0
    customProps[ 'data-vce-count-up-grouping' ] = false
    customProps[ 'data-vce-count-up-duration' ] = 1
    customProps[ 'data-vce-count-up-easing' ] = false

    return <div className={containerClasses} {...customProps}>
      <div className='vce-progress-bar-text'>
        <CustomTitleTag className='vce-progress-bar-title' {...titleProps}>{title}</CustomTitleTag>
        <CustomValueTag className='vce-progress-bar-value' {...valueProps}>
          <span className='vce-progress-bar-value-result'>0</span>%
        </CustomValueTag>
      </div>
      <div className='vce-progress-bar-wrapper'>
        <progress className='vce-progress-bar' value={value} max='100'>{value} %</progress>
      </div>
    </div>
  }
}
