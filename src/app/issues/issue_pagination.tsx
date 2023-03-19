import Link from "next/link";

import styles from "../../styles/issues/issues.module.css"

type Props = {
    page: number;
    page_limit: number; 
    max_page: number
}

const IssuePagination = ({page, page_limit, max_page}: Props) => {
    const createPaginationBtn = (): JSX.Element[] => {
        const page_link_btn_itmes = []
        for (let i = page - 2; i < page + 3; i++) {
            if (i < 1 || i > max_page) {
                continue
            } else {
                if (page == i) {
                    page_link_btn_itmes.push(
                        <li key={i} className={`${styles.issues_pagination_list_item} ${styles.activePage}`}>
                            <Link href={`/issues?page=${i}&page_limit=${page_limit}`} shallow={true}>{i}</Link>
                        </li>
                    )
                } else {
                    page_link_btn_itmes.push(
                        <li key={i} className={styles.issues_pagination_list_item}>
                            <Link href={`/issues?page=${i}&page_limit=${page_limit}`} shallow={true}>{i}</Link>
                        </li>
                    )
                }
            }

        }

        return page_link_btn_itmes
    }
    
    return (
        <div className={styles.issues_pagination}>
            <ul className={styles.issues_pagination_list}>
                { createPaginationBtn() }
            </ul>
        </div>
    )
}

export default IssuePagination