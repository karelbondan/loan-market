import { ProfileCardProps } from "../../../../utils/types";
import { Icon } from "../../../icon";

const belowNameContainerClass = "flex items-center space-x-3";
const innerContainerClass = "flex justify-center items-center p-[7px] rounded-full bg-secondary-blue size-10"

function DashboardProfileCard(props: ProfileCardProps) {
    const { name } = props;

    return (
        <div className="p-5 md:p-10 space-y-5 md:space-y-10 865p:space-y-0 bg-white border-b border-black/20">
            <div className="flex items-center space-x-5 md:space-x-10">
                <img
                    src="/assets/images/profile_photo.png"
                    className="rounded-full border border-black/30 size-[100px] md:size-[150px]" />
                <div className="flex flex-col space-y-4 text-left min-h-full">
                    <h2 className="text-2xl md:text-3xl text-primary-blue font-semibold text-wrap">
                        {name.toUpperCase()}
                    </h2>
                    <div className="hidden 865p:block">
                        <ProfileInfo {...props} />
                    </div>
                </div>
            </div>
            <div className="block 865p:hidden">
                <ProfileInfo {...props} />
            </div>
        </div>
    )
}

function ProfileInfo(props: ProfileCardProps) {
    const { office, id, email, phone } = props;

    return (
        <div id="outer_container" className="space-y-2 640p:space-y-0 640p:flex">
            <div id="inner_container_left" className="space-y-2">
                <div className={belowNameContainerClass}>
                    <div className={innerContainerClass}>
                        <Icon name="office" className="text-primary-blue" />
                    </div>
                    <p>{office}</p>
                </div>
                <div className={belowNameContainerClass}>
                    <div className={innerContainerClass}>
                        <p className="text-primary-blue font-semibold text-xl">ID</p>
                    </div>
                    <p>{id}</p>
                </div>
            </div>
            <div className="max-h-96 w-1 border-r border-black/20 mx-10" />
            <div id="inner_container_right" className="space-y-2">
                <div className={belowNameContainerClass}>
                    <div className={innerContainerClass}>
                        <Icon name="envelope" className="text-primary-blue" />
                    </div>
                    <p>{email}</p>
                </div>
                <div className={belowNameContainerClass}>
                    <div className={innerContainerClass}>
                        <Icon name="telephone" className="text-primary-blue size-10" />
                    </div>
                    <p>{phone}</p>
                </div>
            </div>
        </div>
    )
}

export default DashboardProfileCard