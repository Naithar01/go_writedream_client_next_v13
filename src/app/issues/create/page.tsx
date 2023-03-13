'use client'

import CreateIssueForm from "@/components/issue/create-issue-form"
import { createIssue, ICreateIssue } from "@/lib/issue"
import { CREATE_ISSUE_PAGE_HEADER_COMMENT } from "../../../config"

const CreateIssuePage = () => {
    const CreateIssueSubmitHandler = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault()

        const title_element: HTMLInputElement = event.currentTarget[0] as HTMLInputElement
        const content_element: HTMLInputElement = event.currentTarget[1] as HTMLInputElement

        const Data: ICreateIssue = {
            title: title_element.value,
            content: content_element.value,
        }

        const Category_number: number = 1 

        const res_data = await createIssue(Data, Category_number)

        console.log(res_data);
    }


    return (
        <div className="create_issue_page">
            <h1>{CREATE_ISSUE_PAGE_HEADER_COMMENT}</h1>
            <CreateIssueForm 
                CreateIssueSubmitHandler={CreateIssueSubmitHandler}
            />
        </div>
    )
}

export default CreateIssuePage