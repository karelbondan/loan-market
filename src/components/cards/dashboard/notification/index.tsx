import { NotificationProps } from "../../../../utils/types";

function DashboardNotificationCard() {
    const notification = [
        {
            title: "admin_branch has updated",
            initiator: "Harry Handoko",
            type: "Contact",
            platform: "MYCRM",
            // normally this would be a timestamp, 
            // e.g. 2024-10-15T14:00:43.000+0000
            // but for demo sake this is hardcoded
            timestamp: "2 hrs"
        },
        {
            title: "admin_branch has updated",
            initiator: "Harry Handoko",
            type: "Application",
            platform: "MYCRM",
            timestamp: "2 hrs"
        },
        {
            title: "admin_branch has updated",
            initiator: "Harry Handoko",
            type: "Application",
            platform: "MYCRM",
            timestamp: "4 hrs"
        },
        {
            title: "admin_branch has updated",
            initiator: "Harry Handoko",
            type: "Contact",
            platform: "MYCRM",
            timestamp: "4 hrs"
        },
    ]
    const length = notification.length;
    return (
        <div className="py-5 px-6 h-fit bg-white rounded-lg shadow-md">
            <h3 className="font-semibold mb-5 text-lg">NOTIFICATION</h3>
            {notification.map((content, index) => {
                return Notification({ content, index, length });
            })}
        </div>
    )
}

function Notification(props: NotificationProps) {
    const { content, index, length } = props;
    const { title, initiator, type, platform, timestamp } = content;
    return (
        <div className="flex">
            <p className="text-sidebar-text min-w-fit">{timestamp}</p>
            <div className="flex flex-col items-center translate-y-0.5 ml-10 mr-5">
                <div className={`size-5 ${index % 2 === 0 ? "bg-primary-blue" : "bg-sidebar-text"} rounded-full`} />
                <div className={`h-[100px] w-1.5 ${index + 1 === length ? "bg-none" : "bg-batang-notification"}`}></div>
            </div>
            <div className="space-y-1">
                <p className="font-semibold leading-5">{title}</p>
                <p className="text-sm text-sidebar-text leading-5">{initiator} - {type} | {platform}</p>
            </div>
        </div>
    )
}

export default DashboardNotificationCard