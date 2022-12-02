import classNames from "classnames"

function Buttom({children, variant = 'default' }) {
    return(
        <button className={classNames({
            "p-4 h-10 flex items-center rounded": true,
            "bg-gray-100": variant == 'default',
            "bg-green-600 text-white": variant == 'success',
            "bg-red-600 text-white": variant == 'danger',
            "bg-blue-300 text-white": variant == 'info'
        })}>{children}</button>
    )
}

export default Buttom