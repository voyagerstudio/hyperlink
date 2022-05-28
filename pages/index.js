import Link from 'next/link'
import { UtilButton } from '../components/util-button/UtilButton'

function HomePage() {
  return (
<div id="root">
    <h1>Cherrypicked</h1>
    <nav>
      <ul>
        <li>
          <Link href="/registration"><a>Registration</a></Link>
          <UtilButton label="test" style="primary"></UtilButton>
        </li>
      </ul>
    </nav>
  </div>
)}

export default HomePage