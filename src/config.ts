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


const PAGE_NAME: IPAGE_NAME = {
    Project: {
        Issue: "Issues"
    },
    Issue: {
        Issues: "Issues",
        Create: "Create Issue"
    }
}

const PAGE_HREF: IPAGE_HREF = {
    Project: {
        Issue: "/issues"
    },
    Issue: {
        Issues: "/issues",
        Create: "/issues/create"
    }
}

export const PROJECT_PAGE_LOGO: string = "LOGO"

export const PROJECT_PAGE_MANU_LIST: IPAGE_MANU_LIST[] = [
    { item_name: PAGE_NAME.Project.Issue, item_href: PAGE_HREF.Project.Issue, item_class_name: "header_manu_list_item"},
]

export const NO_OBJECT_COMMENT = "No Object"

export const ISSUE_PAGE_MANU_LIST: IPAGE_MANU_LIST[] = [
    { item_name: PAGE_NAME.Issue.Issues, item_href: PAGE_HREF.Issue.Issues, item_class_name: "issue_side_manu_item" },
    { item_name: PAGE_NAME.Issue.Create, item_href: PAGE_HREF.Issue.Create, item_class_name: "issue_side_manu_item" }
]

export const ISSUES_PAGE_HEADER_COMMENT = "Issue Page"

export const CREATE_ISSUE_PAGE_HEADER_COMMENT = "Create Issue Page"
export const CREATE_ISSUE_PAGE_INPUT_ISSUE_TITLE_COMMENT = "Issue Title"
export const CREATE_ISSUE_PAGE_INPUT_ISSUE_CONTENT_COMMENT = "Issue Content"
