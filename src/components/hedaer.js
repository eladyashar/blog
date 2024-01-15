import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../providers/auth-provider";

export function Header() {
  const {user, signIn} = useContext(AuthContext);

  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">NirKaufman | Blog</a>
          <a className="navbar-brand" href="#">{
            user ? `Hello: ${user.userName}` : <button onClick={signIn}>signIn</button>
          }</a>
          <ul className='nav'>
            <li className='nav-item'>
              <Link className='nav-link'
                    to="/">Home</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link'
                    to="/posts">Posts</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link'
                    to="/contact">Contact</Link>
            </li>
            {user && (
              <li className='nav-item'>
                <Link className='nav-link'
                      to="/admin">Admin</Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
  );
}
