import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
  let a1 = 0
    // const onClick = () => {
    //     console.log(`clicked the button`);
    //     a1 = a1+ 1
    //     console.log(a1)
    // }
  return (
    <header className = 'header'>
       <h1>{title}</h1>
       <Button color='green' text={a1}/>
    </header>
  )
}


Header.defaultProps = {
    title : 'Default value 101'
  }

Header.propTypes = {
    title : PropTypes.string.isRequired,
}

// 
// <h1 style={headingStyle}> {title}</h1>
// const headingStyle = {
//     color : 'red',
//     backgroundColor : 'black'
// }

export default Header