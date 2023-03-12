import Link from "next/link"
import { ISSUE_PAGE_MANU_LIST } from "../../config"
import styles from "../../styles/issues/layout.module.css"

type Props = {
    children: React.ReactNode
}

const IssuesLayout = ({children}: Props) => {
    return (
        <div className={styles.issues}>
            <aside className={styles.issue_side}>
                <h1>Issue Manu</h1>
                <ul className="issue_side_manu">
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