import { NavLink } from 'react-router-dom'
const CatalogNav = () => {

  return (
  <div className='catalogNav'>
    <div className='catalogNavLinks'>
      <NavLink className='catalogNavTitle' to='/catalog'>PARTS</NavLink>
      <NavLink id='cpuLink' to='/catalog/cpu'
      className={({ isActive }) => (isActive ? "link-active" : "catalogNavLink")} >CPU</NavLink>
      <NavLink id='gpuLink' to='/catalog/gpu'
      className={({ isActive }) => (isActive ? "link-active" : "catalogNavLink")}>GPU</NavLink>
      <NavLink id='moboLink' to='/catalog/mobo'
      className={({ isActive }) => (isActive ? "link-active" : "catalogNavLink")} >MOBO</NavLink>
      <NavLink id='ssdLink' to='/catalog/ssd'
      className={({ isActive }) => (isActive ? "link-active" : "catalogNavLink")} >SSD</NavLink>
    </div>
  </div>
  )
}

export default CatalogNav;