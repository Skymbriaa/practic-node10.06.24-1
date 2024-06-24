import styles from './MyLink.module.scss'

constMyLink = ({href='#',
content='text'})=> {
    return(
        <a className={styles.link} href={href}>
            {content}
        </a>
    )
}