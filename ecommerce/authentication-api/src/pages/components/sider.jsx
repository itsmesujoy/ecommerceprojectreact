import React from 'react'
import { Link } from 'react-router-dom';
function Sider() {
  return (
      <div> <div>
          <div className="  text-white sider">
            <br /><br />
             
                  <ul className="sidebar ">
                      <button className='kk ' >
                          <Link to={"/login"}
                               > Login </Link>
                      </button>
                      <br /><br />
                      <button className='kk ' >
                          <Link to={"/signup"} >Sign up</Link>
                      </button>
                 
                     

                  </ul>
              </div>
          </div>
      </div>
  )
}

export default Sider