import Link from 'next/link'


function Nav(){
    return (
        <div>
        <nav className="navbar navbar-light">
        <style global jsx>{`
        nav{
          background-color: #032541;
        }
        `}</style>
        <div className="container-fluid d-flex justify-content-start">
        <Link href="/"><a className="navbar-brand text-light">Home</a></Link> 
        <Link href="/about"><a className="navbar-brand text-light">About</a></Link> 
        </div>
      </nav>
        </div>
    )


}
export default Nav;