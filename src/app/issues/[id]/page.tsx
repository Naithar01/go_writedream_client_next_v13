'use client'

import ReadIssueItem from "@/components/issue/read-issue-item"
import { getIssueByIssueId, IReadIssue } from "@/lib/issue"
import { use, useEffect, useState } from "react"

import styles from "../../../styles/issues/read.module.css"
import IssueLoadingPage from "../loading"

type Props = {
  params: {
    id: number
  }
}

// SWR
// https://swr.vercel.app/ko

const ReadIssuePage = ({params}: Props) => {
  const id = params.id

  const [issue, setIssue] = useState<IReadIssue>()

  useEffect(() => {
    getIssueHandler()
  }, [])


  const getIssueHandler = async () => {
    const ResponseData: {issue: IReadIssue} = await getIssueByIssueId(id)

    setIssue(ResponseData.issue)

    return 
  }

  if (!issue) {
    return (
      <IssueLoadingPage />
    )
  }

  return (
      <div className={styles.read_issue_page}>
        <h3>{issue.title}</h3>
          <ReadIssueItem
              issue={issue}
          />
      </div>
  )
}


export default ReadIssuePage