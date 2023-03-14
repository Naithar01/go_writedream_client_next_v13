import { IIssue } from "@/lib/issue"
import Link from "next/link"

type Props = {
    issues: IIssue[]
}

const IssueList = ({issues}: Props) => {
    return (
        <div className="issue_list">
            {issues.map((issue) => (
                <div className="issue_list_item" key={issue.id}>
                    <header><Link href={`/issues/${issue.id}`}>{issue.id}</Link></header>
                </div>
            ))}
        </div>
    )
}

export default IssueList