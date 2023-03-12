import { CREATE_ISSUE_PAGE_INPUT_ISSUE_CONTENT_COMMENT, CREATE_ISSUE_PAGE_INPUT_ISSUE_CREATE_COMMENT, CREATE_ISSUE_PAGE_INPUT_ISSUE_TITLE_COMMENT, CREATE_ISSUE_PAGE_INPUT_MINLENGTH } from "@/config"

import styles from "../../styles/issues/create.module.css"

type Props = {
    CreateIssueSubmitHandler: (event: React.FormEvent<HTMLFormElement>) => void
}

const CreateIssueForm = ({CreateIssueSubmitHandler}: Props) => {
    return (
        <form className="create_issue_page_form" onSubmit={CreateIssueSubmitHandler}>
            <div className={styles.create_issue_page_form_inp_area}>
                <label htmlFor="title">{CREATE_ISSUE_PAGE_INPUT_ISSUE_TITLE_COMMENT}</label>
                <input type="text" 
                        name="title" 
                        id="title" 
                        autoComplete="off" 
                        placeholder={CREATE_ISSUE_PAGE_INPUT_ISSUE_TITLE_COMMENT}
                        minLength={CREATE_ISSUE_PAGE_INPUT_MINLENGTH}/>
                        
            </div>
            <div className={styles.create_issue_page_form_inp_area}>
                <label htmlFor="content">{CREATE_ISSUE_PAGE_INPUT_ISSUE_CONTENT_COMMENT}</label>
                <input type="text" 
                        name="content" 
                        id="content" 
                        autoComplete="off" 
                        placeholder={CREATE_ISSUE_PAGE_INPUT_ISSUE_CONTENT_COMMENT}
                        minLength={CREATE_ISSUE_PAGE_INPUT_MINLENGTH}/>
            </div>
            <div className={styles.create_issue_page_form_inp_area}>
                <button type="submit" name="submit" id="submit">{CREATE_ISSUE_PAGE_INPUT_ISSUE_CREATE_COMMENT}</button>
            </div>
        </form>        
    )
}

export default CreateIssueForm