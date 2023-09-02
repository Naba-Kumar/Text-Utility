import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {

  
    console.log(`navbar navbar-expand-lg navbar-dark bg-${props.mode.color}`)
   
    let visible;
    if (props.mode.backgroundColor === 'light') {
        visible = false;
    } else {
        visible = true;

    }
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode.color} bg-${props.mode.color} m-0 p-0`}>

                <div className="container-fluid m-0" style={{margin:'0px' , backgroundColor:(props.mode.color === 'dark') ? '#364445' : '#1de1f6'}}>
                    <a className="navbar-brand" href="/">Text Organizer</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ color: 'red' }}>
                            <li className="nav-item " >
                                <a className="nav-link active" aria-current="page" href="/" style={{ color: 'red' }}>{props.navfil}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/" style={{ color: 'red' }}>{props.nex}</a>
                            </li>
                            <li className="nav-item dropdown">


                            </li>
                           

                        </ul>
                      
                     
                        <div className="form-check form-switch">

                            <span id='moon' onClick={props.tooglefunc}>
                                { visible ? (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>)}
                            </span>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
    


}
Navbar.prototype = {
    navfil: PropTypes.string,
    nex: PropTypes.number
}