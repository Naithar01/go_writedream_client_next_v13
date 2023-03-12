import CreateIssueForm from "@/components/issue/create-issue-form"
import { CREATE_ISSUE_PAGE_HEADER_COMMENT } from "../../../config"

const CreateIssuePage = () => {
    return (
        <div className="create_issue_page">
            <h1>{CREATE_ISSUE_PAGE_HEADER_COMMENT}</h1>
            <CreateIssueForm />
        </div>
    )
}

export default CreateIssuePage