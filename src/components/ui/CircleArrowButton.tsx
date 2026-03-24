import styles from './CircleArrowButton.module.css'

type CircleArrowButtonProps = {
    variant?: 'light' | 'purple'
    onClick?: () => void
    ariaLabel?: string
}

export function CircleArrowButton({
    variant = 'light',
    onClick,
    ariaLabel = 'Open',
}: CircleArrowButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={ariaLabel}
            className={`${styles.button} ${styles[variant]}`}
        >
            <svg
                className={styles.icon}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    d="M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                />
                <path
                    d="M9 6H18V15"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    )
}