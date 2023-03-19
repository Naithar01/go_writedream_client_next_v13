import { ISSUE_LOADING_PAGE_COMMENT } from "@/config"
import styles from "../../styles/issues/loading.module.css"

const IssueLoadingPage = () => {
    return (
        <div className={styles.issue_loading}>
            <h1>{ISSUE_LOADING_PAGE_COMMENT}...</h1>
        </div>
    )
}

export default IssueLoadingPage