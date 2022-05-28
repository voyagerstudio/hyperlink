import Link from 'next/link'

function HomePage() {
  return (
<div id="root">
    <h1>Cherrypicked</h1>
    <nav>
      <ul>
        <li>
          <Link href="/registration"><a>Registration</a></Link>
        </li>
      </ul>
    </nav>
  </div>
)}

export default HomePage