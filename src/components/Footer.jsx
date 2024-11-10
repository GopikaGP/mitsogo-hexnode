import React from 'react'
import '../styles/footer.css'

function Footer() {
  return (
    <div>
        <footer className='footer'>
          <div className="container mx-auto w-75 d-flex flex-column gap-3 justify-content-center align-items-center">
            <div className='mx-auto'>
                <h3 className=' text-center text-light footer-heading'>Get Hexnode UEM and start securing your endpoints</h3>
            </div>
            <div>
                <a href="" className='btn btn-danger py-3' style={{backgroundColor:"rgb(170 35 47)"}}>TRY HEXNODE FOR FREE</a>
            </div>
          </div>
        </footer>
        <div className='copyright  py-2'>
            <div className="container">
                <div className='copyright-flex'>
                    <div className='text-copy pt-3'>
                    <ul className='d-flex ul-none'>
                        <li> Terms of Use - </li>
                        <li>Privacy - </li>
                        <li>Cookies</li>
                        </ul>
                        </div>
                        <div>
                            <p className='text-copy pt-3'>Copyright © 2024 Mitsogo Inc. All Rights Reserved.</p>
                        </div>



                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer