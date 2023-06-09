'use client'

import CreateIssueForm from "@/components/issue/create-issue-form"
import { createIssue, ICreateIssue } from "@/lib/issue"
import { useRouter } from "next/navigation"
import { CREATE_ISSUE_PAGE_HEADER_COMMENT, CREATE_SUCCESS_COMMENT } from "../../../config"

import styles from "../../../styles/issues/create.module.css"
import { log } from "console"

const CreateIssuePage = () => {
    const router = useRouter()

    const CreateIssueSubmitHandler = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault()
        
        const title_element: HTMLInputElement = event.currentTarget[0] as HTMLInputElement
        const content_element: HTMLTextAreaElement = event.currentTarget[1] as HTMLTextAreaElement
        const images_element: HTMLInputElement = event.currentTarget[2] as HTMLInputElement

        const Data: ICreateIssue = {
            title: title_element.value,
            content: content_element.value,
        }

        if (Data.title.length == 0 || Data.content.length == 0) {
            alert("Enter Title, Content")

            return
        }

        if (Data.title.length >= 50) {
            alert("Max Title Lenth: 50")

            return
        }

        const images: FileList | null = images_element.files

        const formData: FormData = new FormData();

        formData.append('title', Data.title)
        formData.append('content', Data.content)

        if (images && images.length) {
            for (let i = 0; i < images.length; i++) {
                formData.append('attachments', images[i]);
            }
        }

        const Category_number: number = 1 

        const datas: {id: number} = await createIssue(formData, Category_number)

        alert(CREATE_SUCCESS_COMMENT)

        // Go Read Issue Page
        router.push(`/issues/${datas.id}`)   
        return     
    }


    return (
        <div className={styles.create_issue_page}>
            <h3>{CREATE_ISSUE_PAGE_HEADER_COMMENT}</h3>
            <CreateIssueForm 
                CreateIssueSubmitHandler={CreateIssueSubmitHandler}
            />
        </div>
    )
}

export default CreateIssuePage