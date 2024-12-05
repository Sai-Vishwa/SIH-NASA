
function NavBarLink({text , route , size , pad}){
    return(
        <a href={route} className={`text-white ${pad} cursor-pointer hover:underline  ${size}`}>{text}</a>
    )
}
export default NavBarLink;