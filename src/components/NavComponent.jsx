function NavComponent(props) {
  return (
    <nav>
      {props.navDataArr.map(({ id, to, linkText }) => (
        <a key={id} className='nav-link' href={to}>
          {linkText}
        </a>
      ))}
    </nav>
  );
}
export default NavComponent;

// create nav component with links from array
// {
//   /* <nav>
//   <a href='/' >Home</a>
// </nav> */
// }
