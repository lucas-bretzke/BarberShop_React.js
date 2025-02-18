const size = {
  sm: '576px',
  md: '768px',
  bg: '992px'
}

const breakpoints = {
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  bg: `(max-width: ${size.bg})`,
}

export default breakpoints

/**
 * display: grid;
 * grid-template-columns: repeat(4, 240px);
 * gap: 16px;
 */
