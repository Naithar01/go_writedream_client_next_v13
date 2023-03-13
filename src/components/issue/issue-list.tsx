import { IIssue } from "@/lib/issue"

type Props = {
    issues: IIssue[]
}

const IssueList = ({issues}: Props) => {
    return (
        <div className="issue_list">
            {issues.map((issue) => (
                <div className="issue_list_item" key={issue.id}>
                    <header>{issue.id}</header>
                </div>
            ))}
        </div>
    )
}

export default IssueList