import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className=' lg:flex justify-between align-middle mx-4 lg:mx-80 my-5 border-b-2 pb-2 text-center'>
            <h1 className="text-4xl font-bold">
                Knowledge Cafe
            </h1>
            <div className='flex justify-center'>
                <img src={profile} alt="" />
            </div>
        </div>

    );
};

export default Header;