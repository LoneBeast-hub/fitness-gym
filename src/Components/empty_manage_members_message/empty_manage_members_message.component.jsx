// imgs
import EmptyManageMembersImg from '../../assets/members.png';

const EmptyManageMembersMessage = () => {
    return(
        <div className="h-full min-h-[60vh] flex-col w-full flex items-center justify-center">
            <img className='max-w-[165px] w-full md:max-w-[290px]' src={EmptyManageMembersImg} alt="No members" />
            <p className='mt-[1rem] md:mt-[3rem] text-black-100 font-medium text-[1.6rem] md:text-[2.4rem]'>No member has been registered</p>
        </div>
    )
}

export default EmptyManageMembersMessage;