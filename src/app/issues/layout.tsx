import { ISSUE_PAGE_MANU_LIST, ISSUE_PAGE_MANU_TITLE } from "@/config"
import Link from "next/link"
import styles from "../../styles/issues/layout.module.css"

type Props = {
    children: React.ReactNode
}

const IssuesLayout = ({children}: Props) => {
    return (
        <div className={styles.issues}>
            <aside className={styles.issue_side}>
                <h3>{ISSUE_PAGE_MANU_TITLE}</h3>
                <ul className={styles.issue_side_manu}>
                    {ISSUE_PAGE_MANU_LIST.map((Manu, index) => (
                        <li key={index}>
                            <Link href={Manu.item_href} className={Manu.item_class_name}>{Manu.item_name}</Link>
                        </li>
                    ))}
                </ul>
            </aside>
            {children}
        </div>
    )
}

export default IssuesLayout