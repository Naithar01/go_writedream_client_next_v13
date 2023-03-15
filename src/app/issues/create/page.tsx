'use client'

import CreateIssueForm from "@/components/issue/create-issue-form"
import { createIssue, ICreateIssue } from "@/lib/issue"
import { useRouter } from "next/navigation"
import { CREATE_ISSUE_PAGE_HEADER_COMMENT, CREATE_SUCCESS_COMMENT } from "../../../config"

const CreateIssuePage = () => {
    const router = useRouter()

    const CreateIssueSubmitHandler = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault()

        const title_element: HTMLInputElement = event.currentTarget[0] as HTMLInputElement
        const content_element: HTMLInputElement = event.currentTarget[1] as HTMLInputElement

        const Data: ICreateIssue = {
            title: title_element.value,
            content: content_element.value,
        }

        const Category_number: number = 1 

        const datas: {id: number} = await createIssue(Data, Category_number)

        alert(CREATE_SUCCESS_COMMENT)

        // Go Read Issue Page
        router.push(`/issues/${datas.id}`)   
        return     
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