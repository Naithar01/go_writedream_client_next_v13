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
            let main_banner0 = document.querySelectorAll(".banner")[0]
            let main_banner1 = document.querySelectorAll(".banner")[1]
            let main_banner2 = document.querySelectorAll(".banner")[2]
            let main_banner3 = document.querySelectorAll(".banner")[3]
            let footer_banner = document.querySelectorAll("footer.banner")[0]
            let observer = new IntersectionObserver((e) => {
                e.forEach((element) => {
                    if (element.isIntersecting) {
                        element.target.style.opacity = 1
                    } else {
                        element.target.style.opacity = 0
                    }
                })
            });
            observer.observe(main_banner0);
            observer.observe(main_banner1);
            observer.observe(main_banner2);
            observer.observe(main_banner3);
            observer.observe(footer_banner);
            
            let main_banner_count = 0;
            let main_banners = document.querySelectorAll(".site_banner");

            setInterval(() => {
              main_banners[main_banner_count].style.display = "none";
              main_banner_count++;
              main_banner_count %= 4;
              main_banners[main_banner_count].style.display = "block";
            }, 5000)
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
      <div className="site_banners">
        <div className="site_banner banner"></div>
        <div className="site_banner banner"></div>
        <div className="site_banner banner"></div>
        <div className="site_banner banner"></div>
      </div>
      <div className="app">
        {children}
      </div>
      <footer className="site_footer_banner banner"></footer>
      </body>
    </html>
  )
}

export default RootLayout