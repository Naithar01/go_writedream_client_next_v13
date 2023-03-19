import { getIssues, IIssue } from "@/lib/issue"
import { ISSUES_PAGE_HEADER_COMMENT, ISSUE_FETCH_NULL_DATA_COMMENT, NO_OBJECT_COMMENT } from "../../config"
import IssueList from "@/components/issue/issue-list"
import IssuePagination from "./issue_pagination"

type Props = {
    searchParams: { page: number, page_limit: number, category_id: number };
}

const IssuesPage = async ({searchParams}: Props) => {
    // Query
    let { page, page_limit, category_id } = searchParams

    if (page == undefined || page_limit == undefined || page <= 0 || page_limit <= 0) {
        page = 1
        page_limit = 5
    }

    const data: { issues: IIssue[], issues_count: number } = await getIssues({page, page_limit, category_id})
    
    const max_page: number = Math.ceil(data.issues_count / page_limit)

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
            <h3>{ISSUES_PAGE_HEADER_COMMENT}</h3>
            {data && data.issues && data.issues.length ? 
                <>
                    <IssueList issues={data.issues} />
                    <IssuePagination page={page} page_limit={page_limit} max_page={max_page} />
                </>: 
                <div>{NO_OBJECT_COMMENT}</div>
            }
        </div>
    )
}

export default IssuesPage