import React from 'react';
import './VerticalMenu.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChartSimple, faComments, faRightFromBracket, faCog } from '@fortawesome/free-solid-svg-icons';

function VerticalMenu() {
  return (
    <div>
      <link rel="stylesheet" to="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <nav>
        <ul>
            <li>
              <Link to='' className='logo'>
                <img src='https://ik.imagekit.io/tp/20220224-etisalat-group-new-logo.png' alt=''/>
                <span className="nav-item">Etisalat Egypt</span>
              </Link>
            </li>
          <li><Link to='/Chat'>
            <FontAwesomeIcon className="fas" icon={faComments} style={{ color: "#000000", }} fontSize={10} />
            <span className='nav-item' align="left">Conversations</span>
          </Link></li>
          <li><Link to='#'>
            <FontAwesomeIcon className="fas" icon={faUser} style={{ color: "#000000", }} fontSize={10} />
            <span className='nav-item'>Profile</span>
          </Link></li>
          <li><Link to='/Analysis'>
            <FontAwesomeIcon className="fas" icon={faChartSimple} style={{ color: "#000000", }} fontSize={10} />
            <span className='nav-item'>Analytics</span>
          </Link></li>
          <li><Link to='#'>
            <FontAwesomeIcon className="fas" icon={faCog} style={{ color: "#000000", }} fontSize={15} />
            <span className='nav-item'>Settings</span>
          </Link></li>
          <li><Link to='#' className='logout'>
            <FontAwesomeIcon className="fas" icon={faRightFromBracket} style={{ color: "#000000", }} fontSize={10} />
            <span className='nav-item'>LogOut</span>
          </Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default VerticalMenu;
