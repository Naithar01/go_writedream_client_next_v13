interface IPAGE_NAME {
    Project: {
        Issue: string
    },
    Issue: {
        Issues: string,
        Create: string
    }
}

interface IPAGE_HREF {
    Project: {
        Issue: string
    },
    Issue: {
        Issues: string,
        Create: string
    }
}


interface IPAGE_MANU_LIST {
    item_name: string;
    item_href: string;
    item_class_name: string;
}


// [Link] Page의 링크 이름
const PAGE_NAME: IPAGE_NAME = {
    Project: {
        Issue: "Issues"
    },
    Issue: {
        Issues: "Issues",
        Create: "Create Issue"
    }
}

// [Link] Page의 링크 이동 경로
const PAGE_HREF: IPAGE_HREF = {
    Project: {
        Issue: "/issues?page=1&page_limit=5"
    },
    Issue: {
        Issues: "/issues?page=1&page_limit=5",
        Create: "/issues/create"
    }
}

export const DEFAULT_API_URL: string = "http://ec2-3-34-53-123.ap-northeast-2.compute.amazonaws.com:8080";

export const PROJECT_PAGE_LOGO: string = "LOGO"

export const PROJECT_PAGE_MANU_LIST: IPAGE_MANU_LIST[] = [
    { item_name: PAGE_NAME.Project.Issue, item_href: PAGE_HREF.Project.Issue, item_class_name: "header_manu_list_item"},
]

export const NO_OBJECT_COMMENT: string = "No Object"

export const ISSUE_PAGE_MANU_LIST: IPAGE_MANU_LIST[] = [
    { item_name: PAGE_NAME.Issue.Issues, item_href: PAGE_HREF.Issue.Issues, item_class_name: "issue_side_manu_item" },
    { item_name: PAGE_NAME.Issue.Create, item_href: PAGE_HREF.Issue.Create, item_class_name: "issue_side_manu_item" }
]

export const ISSUES_PAGE_HEADER_COMMENT: string = "Issue Page"

export const CREATE_ISSUE_PAGE_HEADER_COMMENT: string = "Create Issue Page"
export const CREATE_ISSUE_PAGE_INPUT_ISSUE_TITLE_COMMENT: string = "Issue Title"
export const CREATE_ISSUE_PAGE_INPUT_ISSUE_CONTENT_COMMENT: string = "Issue Content"
export const CREATE_ISSUE_PAGE_INPUT_ISSUE_CREATE_COMMENT: string = "Create Issue"
export const CREATE_ISSUE_PAGE_INPUT_MINLENGTH: number = 6


export const CREATED_COMMENT: string = "Created: "
export const UPDATED_COMMENT: string = "Updated: "
export const VIEWCOUNT_COMMENT: string = "View: "

export const CREATE_SUCCESS_COMMENT: string = "Create Success\nPage Loading..."
export const ISSUE_FETCH_NULL_DATA_COMMENT: string = "Reload Page"