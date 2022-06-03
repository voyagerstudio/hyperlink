import Link from 'next/link'
import { UtilButton } from '../components/util-button/UtilButton'
import styles from '../components/util-button/UtilButton.module.css' 

function HomePage() {
  return (
<div id="root">
    <h1>Hyperlink</h1>
    <nav>
      <ul>
        <li>
          <Link href="/registration"><a>Registration</a></Link>
          <UtilButton className={styles.testBtn} label="button text" size="lg" style="primary" ></UtilButton>
        </li>
      </ul>
    </nav>
  </div>
)}

export default HomePage