export interface IIssue {
    issues: [] | any[] | any; // 추가 예정
    issues_count: number   
}

const DEFAULT_URL: string = "http://ec2-18-212-96-77.compute-1.amazonaws.com:8080"

export const getIssues = async () => {
    const res = await fetch(`${DEFAULT_URL}/api/issues`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
        next: { revalidate: 15 } // getStaticProps Option revalidate => 10
    })

    return await res.json()
}