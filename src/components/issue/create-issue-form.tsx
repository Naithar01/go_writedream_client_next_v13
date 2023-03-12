import { CREATE_ISSUE_PAGE_INPUT_ISSUE_CONTENT_COMMENT, CREATE_ISSUE_PAGE_INPUT_ISSUE_TITLE_COMMENT } from "@/config"

import styles from "../../styles/issues/create.module.css"

const CreateIssueForm = () => {
    return (
        <form className="create_issue_page_form">
            <div className={styles.create_issue_page_form_inp_area}>
                <label htmlFor="title">{CREATE_ISSUE_PAGE_INPUT_ISSUE_TITLE_COMMENT}</label>
                <input type="text" name="title" id="title" autoComplete="off" placeholder={CREATE_ISSUE_PAGE_INPUT_ISSUE_TITLE_COMMENT}/>
            </div>
            <div className={styles.create_issue_page_form_inp_area}>
                <label htmlFor="content">{CREATE_ISSUE_PAGE_INPUT_ISSUE_CONTENT_COMMENT}</label>
                <input type="text" name="content" id="content" autoComplete="off" placeholder={CREATE_ISSUE_PAGE_INPUT_ISSUE_CONTENT_COMMENT}/>
            </div>

        </form>        
    )
}

export default CreateIssueForm