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
    const res = await fetch(`http://ec2-18-212-96-77.compute-1.amazonaws.com:8080/api/issues`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
        // next: { revalidate: 30 } // getStaticProps Option revalidate => 10
    })

    return await res.json()
}

export const createIssue = async (Data: ICreateIssue, category: number) => {
    const res = await fetch(`http://ec2-18-212-96-77.compute-1.amazonaws.com:8080/api/issues?category_id=${category}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Data),
    })

    return await res.json()
}