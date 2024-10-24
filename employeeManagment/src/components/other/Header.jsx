function Header() {


    return (
        <>
            <div className="flex items-end justify-between">
                <h1 className="text-2xl font-medium">hello<br /><span className="text-3xl font-bold">maaz</span></h1>
                <button className="bg-red-600 rounded-small rounded px-5 py-2 text-lg font-medium">Log out</button>
            </div>

        </>
    );


}
export default Header;