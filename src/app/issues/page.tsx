import { use } from "react"
import { getIssues, IIssue } from "@/lib/issue"
import { ISSUES_PAGE_HEADER_COMMENT, NO_OBJECT_COMMENT } from "../../config"
import IssueList from "@/components/issue/issue-list"

type Props = {
    searchParams: { page: number, page_limit: number, category: string };
}

const IssuesPage = ({searchParams}: Props) => {
    const data: { issues: IIssue[], issues_count: number } = use(getIssues())

    console.log(searchParams);
    

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