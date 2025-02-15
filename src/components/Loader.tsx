import '../assets/loader.css'

const Loader = () => {
    return (
        <div className="flex items-center justify-center w-screen h-screen font-generalsans">
            <div className="loader">
                <p className='flex font-generalsans filter'><img src="/image/profileNoBg.png" alt="" className='w-10 h-fit' /><span className="md:flex hidden">fnikolabs.com | </span></p>
                <div className="words">
                    <span className="word">Code 🧠</span>
                    <span className="word">Design🎇</span>
                    <span className="word">Innovate🔥</span>
                    <span className="word">Coffee☕</span>
                    <span className="word">Code 🧠</span>

                </div>
            </div>
        </div>
    );
}

export default Loader;
