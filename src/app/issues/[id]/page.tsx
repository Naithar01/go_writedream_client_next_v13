import ReadIssueItem from "@/components/issue/read-issue-item"
import { getIssueByIssueId, IReadIssue } from "@/lib/issue"
import { use } from "react"

type Props = {
  params: {
    id: number
  }
}

const ReadIssuePage = ({params}: Props) => {
  const id = params.id
  const data: { issue: IReadIssue } = use(getIssueByIssueId(id))

  return (
      <div className="read_issue_page">
        <h3>{data.issue.title}</h3>
            <ReadIssueItem
                issue={data.issue}
            />
      </div>
  )
}


export default ReadIssuePage