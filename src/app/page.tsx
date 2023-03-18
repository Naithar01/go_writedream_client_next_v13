import { MAIN_PAGE_BANNER_CONTENTS, MAIN_PAGE_BANNER_TITLE } from "@/config"
import styles from "../styles/page.module.css"

const Page = () => {
  return (
    <div className={styles.main_page}>
      <header>
        {MAIN_PAGE_BANNER_TITLE}
      </header>
      <main className={styles.main_page_content}>
         {MAIN_PAGE_BANNER_CONTENTS.map((content) => (
            <div key={content.Title}>
              <h3>{content.Title}</h3>
              {content.Url && <a href={content.Url} target="_blank">{content.Url_Name}</a>}
              <ul>
                {content.text.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
            </div>
         ))}
      </main>
    </div>
  )
}

export default Page