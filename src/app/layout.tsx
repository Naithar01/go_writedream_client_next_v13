import { PROJECT_PAGE_LOGO, PROJECT_PAGE_MANU_LIST } from '@/config'
import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'Zl존 정호',
  description: 'Zl존 정호 App',
}

type Props = {
  children: React.ReactNode
}

const RootLayout = ({children}: Props) => {
  return (
    <html lang="en">
      <body>
      <header className="header web_header_background_img">
        <div className="header_page_logo">
          <Link href="/">{PROJECT_PAGE_LOGO}</Link>
        </div>
        <div className='header_manu'>
          <ul className="header_manu_list">
            {PROJECT_PAGE_MANU_LIST.map((Manu, index) => (
              <li key={index} className={Manu.item_class_name}>
                <Link href={Manu.item_href}>
                  {Manu.item_name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
      <div className="app">
        <div className="site_banner"></div>
        {children}
      </div>
      </body>
    </html>
  )
}

export default RootLayout