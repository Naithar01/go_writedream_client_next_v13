import { DEFAULT_API_URL } from "@/config";

export interface IIssue {
    issues: [] | any[] | any; // 추가 예정
    issues_count: number   
}

export interface ICreateIssue {
    title: string;
    content: string;
}

export const getIssues = async () => {
    const res = await fetch(`${DEFAULT_API_URL}/api/issues`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
        // next: { revalidate: 30 } // getStaticProps Option revalidate => 10
    })

    return await res.json()
}

export const createIssue = async (Data: ICreateIssue, category: number) => {
    const res = await fetch(`${DEFAULT_API_URL}/api/issues?category=${category}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Data),
    })

    return await res.json()
}