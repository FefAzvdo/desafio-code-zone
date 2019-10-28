import React from 'react';

const NavButton = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ width: 10, height: 10, borderRadius: 5, cursor: 'pointer' }} />
  )
}

export default NavButton