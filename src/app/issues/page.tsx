import { use } from "react"
import { getIssues, IIssue } from "@/lib/issue"
import { NO_OBJECT_COMMENT } from "../../../config"

const IssuesPage = () => {
    const data: IIssue = use(getIssues())
    console.log(data);
    
    return (
        <div className="issues_page">
            {data.issues && data.issues.length ? <div>데이터 생기면 추가.. 먼저 Issue 만드는 페이지부터 </div> : <div>{NO_OBJECT_COMMENT}</div>}
        </div>
    )
}

export default IssuesPage