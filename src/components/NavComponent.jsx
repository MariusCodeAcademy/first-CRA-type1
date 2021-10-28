const navData = [
  {
    id: 1,
    to: 'index.html',
    linkText: 'Home',
  },
  {
    id: 2,
    to: 'about.html',
    linkText: 'About',
  },
  {
    id: 3,
    to: 'contact.html',
    linkText: 'Contact us',
  },
];

function NavComponent() {
  return (
    <nav>
      {navData.map((navObj) => (
        <a key={navObj.id} className='nav-link' href={navObj.to}>
          {navObj.linkText}
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
