import { IIssue } from "@/lib/issue"
import Link from "next/link"

import styles from "../../styles/issues/issues.module.css"

type Props = {
    issues: IIssue[]
}

const IssueList = ({issues}: Props) => {
    return (
        <div className={styles.issue_list}>
            {issues.map((issue) => (
                <ul className={styles.issue_list_item_list} key={issue.id}>
                    <li className={styles.issue_list_item_list_item}>
                        <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                    </li>
                </ul>
            ))}
        </div>
    )
}

export default IssueList