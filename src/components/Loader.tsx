import '../assets/loader.css'

const Loader = () => {
    return (
        <div className="flex items-center justify-center w-screen h-screen font-generalsans">
            <div className="loader">
                <p className='flex font-generalsans filter'><img src="/image/profileNoBg.png" alt="" className='w-10 h-fit' /></p>
                <div className="words">
                    <span className="word">Optimizing concepts🧠</span>
                    <span className="word">Enhancing creativity🎇</span>
                    <span className="word">Streamlining ideas☕</span>
                    <span className="word">Pioneering progress🔥</span>
                </div>
            </div>
        </div>
    );
}

export default Loader;
