import React from 'react'

const getScreenOnly = (options) => {
  return <svg className={options.svgClasses} width={options.imageWidth} viewBox='0 0 280 600'>
    <defs>
      <path d='M55,5 L55,10 C55,17.6679687 64.4771525,23 70,23 L210,23 C215.522847,23 225,18.203125 225,10 L225,5 C225,2.23857625 227.238576,5.07265313e-16 230,0 L255,0 C268.807119,0 280,11.1928813 280,25 L280,575 C280,588.807119 268.807119,600 255,600 L25,600 C11.1928813,600 0,588.807119 0,575 L0,25 C0,11.1928813 11.1928813,0 25,0 L50,0 C52.7614237,-5.07265313e-16 55,2.23857625 55,5 Z' id={`path-${options.id}`} />
    </defs>
    <g id={`Page-${options.id}`} stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g id={options.id}>
        <mask id={`image-mask-${options.id}`} fill='white'>
          <use href={`#path-${options.id}`} />
        </mask>
        <use id={`Path-${options.id}`} href={`#path-${options.id}`} />
      </g>
    </g>
    <image id={`Bitmap-${options.id}`} width='100%' height='100%' preserveAspectRatio='xMidYMid slice' href={options.imgSrc} mask={`url(#image-mask-${options.id})`} />
  </svg>
}

const getHalfScreenOnly = (options) => {
  return <svg className={options.svgClasses} width={options.imageWidth} viewBox='0 0 280 494'>
    <defs>
      <path d='M280,494 L0,494 L0,25 C0,11.1928813 11.1928813,0 25,0 L50,0 C52.7614237,0 55,2.23857625 55,5 L55,10 C55,17.6679687 64.4771525,23 70,23 L210,23 C215.522847,23 225,18.203125 225,10 L225,5 C225,2.23857625 227.238576,0 230,0 L255,0 C268.807119,0 280,11.1928813 280,25 L280,494 Z' id={`path-${options.id}`} />
    </defs>
    <g id={`Page-${options.id}`} stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g id={options.id}>
        <g id={`Path-2-${options.id}`}>
          <mask id={`image-mask-${options.id}`} fill='white'>
            <use href={`#path-${options.id}`} />
          </mask>
          <use id={`Path-${options.id}`} href={`#path-${options.id}`} />
        </g>
      </g>
    </g>
    <image id={`Bitmap-${options.id}`} width='100%' height='100%' preserveAspectRatio='xMidYMid slice' href={options.imgSrc} mask={`url(#image-mask-${options.id})`} />
  </svg>
}

const getFullSolid = (options) => {
  return <svg className={options.svgClasses} width={options.imageWidth} viewBox='0 0 310 634'>
    <defs>
      <path d='M55,5 L55,10 C55,17.6679687 64.4771525,23 70,23 L210,23 C215.522847,23 225,18.203125 225,10 L225,5 C225,2.23857625 227.238576,5.07265313e-16 230,0 L255,0 C268.807119,0 280,11.1928813 280,25 L280,575 C280,588.807119 268.807119,600 255,600 L25,600 C11.1928813,600 0,588.807119 0,575 L0,25 C0,11.1928813 11.1928813,0 25,0 L50,0 C52.7614237,-5.07265313e-16 55,2.23857625 55,5 Z' id={`path-${options.id}`} />
    </defs>
    <g id={`Page-${options.id}`} stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g id={`1-${options.id}`}>
        <rect id={`Rectangle-${options.id}`} fill={options.color} x='0' y='0' width='310' height='634' rx='40' />
        <g id={`2-${options.id}`} transform='translate(15.000000, 17.000000)'>
          <mask id={`image-mask-${options.id}`} fill='white'>
            <use href={`#path-${options.id}`} />
          </mask>
          <use id={`Path-${options.id}`} href={`#path-${options.id}`} />
          <image id={`Bitmap-${options.id}`} mask={`url(#image-mask-${options.id})`} x={options.imageOffset.x} y={options.imageOffset.y} width='100%' height='100%' preserveAspectRatio='xMidYMid slice' href={options.imgSrc} />
        </g>
        <path d='M134,23 L180,23 C181.104569,23 182,23.8954305 182,25 C182,26.1045695 181.104569,27 180,27 L134,27 C132.895431,27 132,26.1045695 132,25 C132,23.8954305 132.895431,23 134,23 Z M195,28 C193.343146,28 192,26.6568542 192,25 C192,23.3431458 193.343146,22 195,22 C196.656854,22 198,23.3431458 198,25 C198,26.6568542 196.656854,28 195,28 Z' id={`Combined-Shape-${options.id}`} fillOpacity='0.5' fill='#FFFFFF' />
      </g>
    </g>
  </svg>
}

const getFullOutline = (options) => {
  return <svg className={options.svgClasses} width={options.imageWidth} viewBox='0 0 310 634'>
    <defs>
      <path d='M55,5 L55,10 C55,17.6679687 64.4771525,23 70,23 L210,23 C215.522847,23 225,18.203125 225,10 L225,5 C225,2.23857625 227.238576,5.07265313e-16 230,0 L255,0 C268.807119,0 280,11.1928813 280,25 L280,575 C280,588.807119 268.807119,600 255,600 L25,600 C11.1928813,600 0,588.807119 0,575 L0,25 C0,11.1928813 11.1928813,0 25,0 L50,0 C52.7614237,-5.07265313e-16 55,2.23857625 55,5 Z' id={`path-${options.id}`} />
    </defs>
    <g id={`Page-${options.id}`} stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g id={`1-${options.id}`}>
        <path d='M40,0 L270,0 C292.09139,0 310,17.90861 310,40 L310,594 C310,616.09139 292.09139,634 270,634 L40,634 C17.90861,634 0,616.09139 0,594 L0,40 C0,17.90861 17.90861,0 40,0 Z M44,4 C17.8457031,4 4,19.9990234 4,44 L4,590 C4,612.857422 19.9628906,630 44,630 L266,630 C289.110352,630 306,615.151367 306,590 L306,44 C306,20.1162109 290.345703,4 266,4 L44,4 Z' id={`Combined-Shape-${options.id}`} fill={options.color} />
        <g id={`2-${options.id}`} transform='translate(15.000000, 17.000000)'>
          <mask id={`image-mask-${options.id}`} fill='white'>
            <use href={`#path-${options.id}`} />
          </mask>
          <use id={`Path-${options.id}`} href={`#path-${options.id}`} />
          <image id={`Bitmap-${options.id}`} mask={`url(#image-mask-${options.id})`} x={options.imageOffset.x} y={options.imageOffset.y} width='100%' height='100%' preserveAspectRatio='xMidYMid slice' href={options.imgSrc} />
        </g>
        <path d='M134,23 L180,23 C181.104569,23 182,23.8954305 182,25 C182,26.1045695 181.104569,27 180,27 L134,27 C132.895431,27 132,26.1045695 132,25 C132,23.8954305 132.895431,23 134,23 Z M195,28 C193.343146,28 192,26.6568542 192,25 C192,23.3431458 193.343146,22 195,22 C196.656854,22 198,23.3431458 198,25 C198,26.6568542 196.656854,28 195,28 Z' id={`Combined-Shape-${options.id}`} fill={options.color} />
      </g>
    </g>
  </svg>
}

const getHalfSolid = (options) => {
  return <svg className={options.svgClasses} width={options.imageWidth} viewBox='0 0 310 511'>
    <defs>
      <path d='M280,494 L0,494 L0,25 C0,11.1928813 11.1928813,0 25,0 L50,0 C52.7614237,0 55,2.23857625 55,5 L55,10 C55,17.6679687 64.4771525,23 70,23 L210,23 C215.522847,23 225,18.203125 225,10 L225,5 C225,2.23857625 227.238576,0 230,0 L255,0 C268.807119,0 280,11.1928813 280,25 L280,494 Z' id={`path-${options.id}`} />
    </defs>
    <g id={`Page-${options.id}`} stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g id={`1-${options.id}`}>
        <path d='M40,0 L270,0 C292.09139,-4.05812251e-15 310,17.90861 310,40 L310,511 L0,511 L0,40 C-2.705415e-15,17.90861 17.90861,4.05812251e-15 40,0 Z' id={`Combined-Shape-${options.id}`} fill={options.color} />
        <g id={`2-${options.id}`} transform='translate(15.000000, 17.000000)'>
          <mask id={`image-mask-${options.id}`} fill='white'>
            <use href={`#path-${options.id}`} />
          </mask>
          <use id={`Path-${options.id}`} href={`#path-${options.id}`} />
          <image id={`Bitmap-${options.id}`} mask={`url(#image-mask-${options.id})`} x={options.imageOffset.x} y={options.imageOffset.y} width='100%' height='100%' preserveAspectRatio='xMidYMid slice' href={options.imgSrc} />

        </g>
        <path d='M134,23 L180,23 C181.104569,23 182,23.8954305 182,25 C182,26.1045695 181.104569,27 180,27 L134,27 C132.895431,27 132,26.1045695 132,25 C132,23.8954305 132.895431,23 134,23 Z M195,28 C193.343146,28 192,26.6568542 192,25 C192,23.3431458 193.343146,22 195,22 C196.656854,22 198,23.3431458 198,25 C198,26.6568542 196.656854,28 195,28 Z' id={`Combined-Shape-${options.id}`} fillOpacity='0.5' fill='#FFFFFF' />
      </g>
    </g>
  </svg>
}

const getHalfOutline = (options) => {
  return <svg className={options.svgClasses} width={options.imageWidth} viewBox='0 0 310 511'>
    <defs>
      <path d='M280,494 L0,494 L0,25 C0,11.1928813 11.1928813,0 25,0 L50,0 C52.7614237,0 55,2.23857625 55,5 L55,10 C55,17.6679687 64.4771525,23 70,23 L210,23 C215.522847,23 225,18.203125 225,10 L225,5 C225,2.23857625 227.238576,0 230,0 L255,0 C268.807119,0 280,11.1928813 280,25 L280,494 Z' id={`path-${options.id}`} />
    </defs>
    <g id={`Page-${options.id}`} stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g id={`1-${options.id}`}>
        <path d='M310,511 L306,511 L306,44 C306,20.1162109 290.345703,4 266,4 L44,4 C17.8457031,4 4,19.9990234 4,44 L4,511 L0,511 L0,40 C0,17.90861 17.90861,0 40,0 L270,0 C292.09139,0 310,17.90861 310,40 L310,511 Z' id={`Combined-Shape-${options.id}`} fill={options.color} />
        <g id={`2-${options.id}`} transform='translate(15.000000, 17.000000)'>
          <mask id={`image-mask-${options.id}`} fill='white'>
            <use href={`#path-${options.id}`} />s
          </mask>
          <use id={`Path-${options.id}`} href={`#path-${options.id}`} />
          <image d={`Bitmap-${options.id}`} mask={`url(#image-mask-${options.id})`} x={options.imageOffset.x} y={options.imageOffset.y} width='100%' height='100%' preserveAspectRatio='xMidYMid slice' href={options.imgSrc} />
        </g>
        <path d='M134,23 L180,23 C181.104569,23 182,23.8954305 182,25 C182,26.1045695 181.104569,27 180,27 L134,27 C132.895431,27 132,26.1045695 132,25 C132,23.8954305 132.895431,23 134,23 Z M195,28 C193.343146,28 192,26.6568542 192,25 C192,23.3431458 193.343146,22 195,22 C196.656854,22 198,23.3431458 198,25 C198,26.6568542 196.656854,28 195,28 Z' id={`Combined-Shape-${options.id}`} fill={options.color} />
      </g>
    </g>
  </svg>
}

export default function MockupType (props) {
  let mockup
  switch (props.mockupStyle) {
    case 'screen-only':
      mockup = getScreenOnly(props)
      break
    case 'half-screen-only':
      mockup = getHalfScreenOnly(props)
      break
    case 'full-solid':
      mockup = getFullSolid(props)
      break
    case 'full-outline':
      mockup = getFullOutline(props)
      break
    case 'half-solid':
      mockup = getHalfSolid(props)
      break
    case 'half-outline':
      mockup = getHalfOutline(props)
      break
    default:
      mockup = null
  }
  return mockup
}
