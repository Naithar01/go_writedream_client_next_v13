import { DEFAULT_API_URL } from "@/config";

export interface IIssue {
    id: number;
    title: string;
    content: string;
    view_count: number;
    created_at: Date;
    updated_at: Date;
    memo_count: number
}

export interface IReadIssue {
    id: number,
    title: string,
    content: string,
    view_count: number,
    created_at: Date,
    updated_at: Date,
    memos: any // 추가 예정
}

export interface ICreateIssue {
    title: string;
    content: string;
}

export const getIssues = async () => {
    const res: Response = await fetch(`${DEFAULT_API_URL}/api/issues`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        next: { revalidate: 10 }
        });

    if (res.status != 200) {
        return null
    }

    return await res.json();
};

export const getIssueByIssueId = async (id: number) => {
    const res: Response = await fetch(`${DEFAULT_API_URL}/api/issues/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        cache: 'no-store'
    });

    if (res.status != 200) {
        return null
    }

    return await res.json();
};


export const createIssue = async (Data: ICreateIssue, category: number) => {
    const res: Response = await fetch(`http://localhost:3000/api/issues?category_id=${category}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Data),
    })

    if (res.status != 201) {
        return null
    }

    return await res.json()
}