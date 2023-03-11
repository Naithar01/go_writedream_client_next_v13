interface IPROJECT_PAGE_MANU_LIST {
    item_name: string;
    item_href: string;
    item_class_name: string;
}

export const PROJECT_PAGE_LOGO: string = "LOGO"

export const PROJECT_PAGE_MANU_LIST: IPROJECT_PAGE_MANU_LIST[] = [
    { item_name: "Issues", item_href: "/issues", item_class_name: "header_manu_list_item"},
]

export const NO_OBJECT_COMMENT = "No Object"    