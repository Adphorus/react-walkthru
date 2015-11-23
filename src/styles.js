const step      = {

}

const arrow     = {
  position      : 'absolute',
  top           : -10,
  left          : -9,
  width         : 0,
  height        : 0,
  border        : '10px solid transparent',
  borderRight   : '10px solid #fff',
  zIndex        : '10'
}

const content   = {
  background    : '#ffffff',
  marginLeft    : 10,
  top           : -30,
  borderRadius  : 4,
  padding       : '11px 11px 50px',
  maxWidth      : 280,
  minWidth      : 280,
  fontSize      : 12,
  lineHeight    : '19px',
  border        : '1px solid #b7efe8',
  boxShadow     : '0 8px 34px rgba(0, 0, 0, 0.2)',
  position      : 'relative',
  overflow      : 'hidden',
  boxSizing     : 'border-box',
  zIndex        : '9'
}

const footer    = {
  position      : 'absolute',
  left          : 0,
  bottom        : 0,
  width         : '100%',
  height        : 34,
  background    : '#eaeaec',
  boxSizing     : 'border-box',
}

const button    = {
  border        : 0,
  outline       : 'none',
  width         : 85,
  height        : 34,
  float         : 'right',
  margin        : 0,
  padding       : 0,
  background    : '#00cdb5',
  color         : '#ffffff',
  boxSizing     : 'border-box',
}

const fullButton= {
  ...button,
  width         : '100%',
}

const nav       = {
  padding       : '0 11px',
  boxSizing     : 'border-box',
}

const navText   = {
  lineHeight    : '34px',
  fontSize      : 11,
  display       : 'inline-block',
  boxSizing     : 'border-box',
  verticalAlign : 'middle'
}

const dots      = {
  display       : 'inline-block',
  lineHeight    : footer.height + 'px',
  marginLeft    : 10
}

const dot       = {
  width         : 10,
  height        : 10,
  display       : 'inline-block',
  borderRadius  : 5,
  border        : '1px solid #B7BAC2',
  background    : footer.background,
  cursor        : 'pointer',
  marginLeft    : 5,
  verticalAlign : 'middle',
  transition    : 'background .4s ease',
  boxSizing     : 'border-box',
}

const dotActive = {
  ...dot,
  background    : '#00cdb5',
  border        : 'none'
}

const dotPast   = {
  ...dot,
  background    : '#B7BAC2',
}

const closeIcon = {
  fill          : '#B7BAC2',
  width         : '18px',
  height        : '18px',
  position      : 'absolute',
  right         : 5,
  top           : 5,
  cursor        : 'pointer',
}

export default function getStyles(userTheme = {}) {
  const theme = {
    step,
    arrow,
    content,
    footer,
    button,
    fullButton,
    navText,
    nav,
    dots,
    dot,
    dotActive,
    dotPast,
    closeIcon
  }

  for (var key in userTheme) {
    if (theme.hasOwnProperty(key)) {
      theme[key] = {
        ...theme[key],
        ...userTheme[key]
      }
    }
  }

  return theme;
}
