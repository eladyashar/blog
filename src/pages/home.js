import {Link} from "react-router-dom";
import catImg from './cat.jpg';
import {useEffect, useState} from "react";

export function Home() {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    window.addEventListener('online', function(e) {
      setOnline(true)
    });

    window.addEventListener('offline', function(e) {
      setOnline(false)
    });
  }, []);

  return (
      <section id="sec" className="py-5 text-center container">
        { online ? <h2>You are on line</h2> : <h2>you are offline</h2> }
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Welcome to My Blog!</h1>
            <img src={catImg} alt=""/>
            <p className="lead text-body-secondary">
              Happy to see ypu here! I'm Nir. I'm a full stack developer.
              I love to learn new things and share my knowledge with others.
              I hope you will enjoy my blog.
            </p>
            <p>
              <Link to="/posts" className="btn btn-primary my-2">Go to
                posts</Link>
            </p>
          </div>
        </div>
      </section>
  );
}
