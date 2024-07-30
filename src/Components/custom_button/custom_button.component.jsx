const CustomButton = ({children, setType, AddClassName, clickFunction, className, primaryColored, redColored, grayColored, ...otherProps}) => {
    return(
        <button {...otherProps} type={setType} onClick={clickFunction} className={`font-medium rounded-[0.5rem] ${AddClassName} ${primaryColored? 'bg-primary-100 text-white' : ''} ${redColored? 'bg-red-100 text-white' : ''} ${grayColored? 'bg-gray-f2 text-black-100' : ''}`}>
            {children}
        </button>
    )
}

export default CustomButton;