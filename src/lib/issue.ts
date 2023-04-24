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
    images: string[]
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

// Server Component
export const getIssues = async ({page, page_limit, category_id}: IGetIssueQuery) => {
    // 카테고리 상관 없는 Issue들
    if (category_id == undefined || category_id <= 0) {
        const res = await fetch(`${DEFAULT_API_URL}/api/issues?page=${page}&page_limit=${page_limit}`, {
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
    } 

    const res = await fetch(`${DEFAULT_API_URL}/api/issues?page=${page}&page_limit=${page_limit}&category_id=${category_id}`, {
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

// Server Component => Client Component 
// Why => ? 
// * Hook ( onClick Event ( Delete, Update ... ) )
export const getIssueByIssueId = async (id: number) => {
    const res: Response = await fetch(`/api/issues/${id}`, {
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

// Client Component
export const createIssue = async (formData: FormData, category: number) => {
    const res: Response = await fetch(`/api/issues?category_id=${category}`, {
        method: "POST",
        body: formData,
    })

    if (res.status != 201) {
        return null
    }

    return await res.json()
}