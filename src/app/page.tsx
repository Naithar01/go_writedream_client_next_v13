import styles from "../styles/page.module.css"

const Page = () => {
  return (
    <div className={styles.main_page}>
      <header>
        Hello World
      </header>
      <div>
        World Is Body
        <a href="http://ec2-18-212-96-77.compute-1.amazonaws.com:8080"> Server - Go - Gin</a>
      </div>
      <footer>
        Hello is Footer
      </footer>
    </div>
  )
}

export default Page