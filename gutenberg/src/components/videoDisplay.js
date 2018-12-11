const { FocusableIframe } = wp.components
const { Fragment } = wp.element

function Section(props) {

  const {
    headline,
    width,
    height
  } = props.attributes

	const outerWrapperStyle = {
    padding: '56.25% 0 0 0',
    position: 'relative'
	}
	const innerWrapperStyle = {
    height:'100%',
    left:0,
    position:'absolute',
    top:0,
    width:'100%'
  }

	return (
    <Fragment>
    <div class="wistia_responsive_padding" style={outerWrapperStyle}>
    <div class="wistia_responsive_wrapper" style={innerWrapperStyle}>
      <FocusableIframe
        src={"//fast.wistia.net/embed/iframe/"+ headline}
        allowtransparency="true"
        frameborder="0"
        scrolling="no"
        class="wistia_embed"
        name="wistia_embed"
        allowfullscreen
        mozallowfullscreen
        webkitallowfullscreen
        oallowfullscreen
        msallowfullscreen
        width={width ? width: '100%'}
        height={height ? height: '100%'}
      />
    </div>
    </div>
    </Fragment>
	);
}

export default Section;