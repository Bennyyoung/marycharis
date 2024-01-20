

const Button = ({ children, type, name }: any) => {

    return (
        <button type={type} name={name} style={{cursor: 'pointer'}} className="thm-btn right">
            {children}
        </button>
    )
}

export default Button