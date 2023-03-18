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

interface IGetIssueQuery {
    page: number, 
    page_limit: number, 
    category_id: number
}

export const getIssues = async ({page, page_limit, category_id}: IGetIssueQuery) => {
    // 카테고리 상관 없는 Issue들
    if (category_id == undefined || category_id <= 0) {
        const res = await fetch(`${DEFAULT_API_URL}/api/issues?page=${page}&page_limit=${page_limit}`, {
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
    } 

    const res = await fetch(`${DEFAULT_API_URL}/api/issues?page=${page}&page_limit=${page_limit}&category_id=${category_id}`, {
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
    const res: Response = await fetch(`/api/issues?category_id=${category}`, {
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