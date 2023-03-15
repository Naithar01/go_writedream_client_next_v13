import { use } from "react"
import { getIssues, IIssue } from "@/lib/issue"
import { ISSUES_PAGE_HEADER_COMMENT, ISSUE_FETCH_NULL_DATA_COMMENT, NO_OBJECT_COMMENT } from "../../config"
import IssueList from "@/components/issue/issue-list"

type Props = {
    searchParams: { page: number, page_limit: number, category_id: number };
}

const IssuesPage = ({searchParams}: Props) => {
    // Query
    let { page, page_limit, category_id } = searchParams

    if (page == undefined || page_limit == undefined || page <= 0 || page_limit <= 0) {
        page = 1
        page_limit = 5
    }

    const data: { issues: IIssue[], issues_count: number } = use(getIssues({page, page_limit, category_id}))
    
    if (data == null) {
        return (
            <div className="issues_page_error">
                <h1>Error...</h1>
                <p>{ISSUE_FETCH_NULL_DATA_COMMENT}</p>
            </div>
        )
    } 


    return (
        <div className="issues_page">
            <h1>{ISSUES_PAGE_HEADER_COMMENT}</h1>
            {data && data.issues && data.issues.length ? 
                <IssueList issues={data.issues} />: 
                <div>{NO_OBJECT_COMMENT}</div>
            }
        </div>
    )
}

export default IssuesPage