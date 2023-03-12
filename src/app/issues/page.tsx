import { use } from "react"
import { getIssues, IIssue } from "@/lib/issue"
import { ISSUES_PAGE_HEADER_COMMENT, NO_OBJECT_COMMENT } from "../../config"

const IssuesPage = () => {
    const data: IIssue = use(getIssues())
    
    return (
        <div className="issues_page">
            <h1>{ISSUES_PAGE_HEADER_COMMENT}</h1>
            {data.issues && data.issues.length ? 
                <div>데이터 생기면 추가.. 먼저 Issue 만드는 페이지부터 </div> : 
                <div>{NO_OBJECT_COMMENT}</div>
            }
        </div>
    )
}

export default IssuesPage