import { CREATED_COMMENT, DEFAULT_API_URL, UPDATED_COMMENT, VIEWCOUNT_COMMENT } from "@/config"
import { IReadIssue } from "@/lib/issue"
import Image from 'next/image';

import styles from "../../styles/issues/read.module.css"

type Props = {
    issue: IReadIssue
}

const ReadIssueItem = ({issue}: Props) => {
    return (
        <div className="read_issue_page_item">
            <header className="read_issue_page_item_header">
                <p className={styles.read_issue_page_item_header_date}>
                    <span>{CREATED_COMMENT + new Date(issue.created_at).toLocaleString()}</span>
                    <span>{UPDATED_COMMENT + new Date(issue.updated_at).toLocaleString()}</span>
                </p>
                <small>{VIEWCOUNT_COMMENT + issue.view_count}</small>
            </header>
            
            {issue.images && issue.images.map((image, index) => (
            <div className={styles.read_issue_page_item_images} key={index}>
                <img src={`${DEFAULT_API_URL}/files/${issue.id}/${image}`} alt={image} />
            </div>
            ))}
            <div className={styles.read_issue_page_item_content} dangerouslySetInnerHTML={ {__html: issue.content} }>
            </div>
            <footer className="read_issue_page_item_memos">

            </footer>
        </div>
    )
}

export default ReadIssueItem