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
            {JSON.stringify(data.issue)}
      </div>
  )
}


export default ReadIssuePage