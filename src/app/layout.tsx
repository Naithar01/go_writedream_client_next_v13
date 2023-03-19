import { PROJECT_PAGE_LOGO, PROJECT_PAGE_MANU_LIST } from '@/config'
import Link from 'next/link'
import Script from 'next/script'
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
        <Script id="show-banner" strategy="afterInteractive">
          {`
            let main_banner = document.querySelectorAll(".banner")[0]
            let footer_banner = document.querySelectorAll(".banner")[1]
            let observer = new IntersectionObserver((e) => {
                e.forEach((element) => {
                    if (element.isIntersecting) {
                        element.target.style.opacity = 1
                    } else {
                        element.target.style.opacity = 0
                    }
                })
            });
            observer.observe(main_banner);
            observer.observe(footer_banner);
          `}
        </Script>
        {
          
        }
      <body>
      <header className="header web_header_background_img">
        <div className="header_page_logo">
          <Link href="/">{PROJECT_PAGE_LOGO}</Link>
        </div>
        <div className='header_manu'>
          <ul className="header_manu_list">
            {PROJECT_PAGE_MANU_LIST.map((Manu, index) => (
              <li key={index} className={Manu.item_class_name}>
                <Link href={Manu.item_href} passHref={true}>
                  {Manu.item_name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
      <div className="app">
        <div className="site_banner banner"></div>
        {children}
        <footer className="site_footer_banner banner"></footer>
      </div>
      </body>
    </html>
  )
}

export default RootLayout