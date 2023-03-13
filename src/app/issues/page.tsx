import { use } from "react"
import { getIssueByIssueId, getIssues, IIssue, IReadIssue } from "@/lib/issue"
import { ISSUES_PAGE_HEADER_COMMENT, NO_OBJECT_COMMENT } from "../../config"
import Link from "next/link"

const IssuesPage = () => {
    const data: { issues: IIssue[], issues_count: number } = use(getIssues())

    return (
        <div className="issues_page">
            <h1>{ISSUES_PAGE_HEADER_COMMENT}</h1>
            {data && data.issues && data.issues.length ? 
                <div>데이터 생기면 추가.. 먼저 Issue 만드는 페이지부터 </div> : 
                <div>{NO_OBJECT_COMMENT}</div>
            }
            <Link href="/issues/1">test</Link>
        </div>
    )
}

export default IssuesPage