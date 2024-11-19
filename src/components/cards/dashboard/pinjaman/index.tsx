import { Circle } from "rc-progress";
import { Icon } from "../../../icon";

function DashboardPinjamanCard() {
  const totalPinjaman = 5;
  const currentPinjaman = 2;
  const pinjamanPercentage = (currentPinjaman / totalPinjaman) * 100;

  const totalTarget = 5000000000.0;
  const currentTarget = 14000000000.0;
  const targetPercentage = (currentTarget / totalTarget) * 100;

  const h3Style = "text-xl font-semibold";
  const subtitleStyle = "";
  const progressStyle = "size-32";
  const progressPercentageStyle =
    "absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-semibold text-2xl";
  const containerStyle = "flex flex-col items-center justify-center space-y-5";

  return (
    <div className="flex justify-center p-5 bg-white rounded-lg shadow-md relative">
      <button className="absolute top-3 right-3 p-1 border-2 border-primary-blue rounded-md scale-90 hover:scale-100 transition-all">
        <Icon name="edit" className="size-6 text-primary-blue"/>
      </button>
      <div className={containerStyle}>
        <h3 className={h3Style}>PINJAMAN DISETUJUI</h3>
        <div className="relative w-fit">
          <Circle
            percent={pinjamanPercentage > 100 ? 100 : pinjamanPercentage}
            strokeLinecap="round"
            strokeWidth={10}
            trailWidth={10}
            className={progressStyle}
          />
          <div className={progressPercentageStyle}>{pinjamanPercentage}%</div>
        </div>
        <p className={subtitleStyle}>
          {currentPinjaman}/{totalPinjaman} Pinjaman telah disetujui
        </p>
      </div>
      <div className="max-h-96 w-1 border-r-2 border-black/20 mx-20" />
      <div className={containerStyle}>
        <h3 className={h3Style}>TARGET</h3>
        <div className="relative w-fit">
          <Circle
            percent={targetPercentage > 100 ? 100 : targetPercentage}
            strokeLinecap="round"
            strokeWidth={10}
            trailWidth={10}
            className={progressStyle}
          />
          <div className={progressPercentageStyle}>{targetPercentage}%</div>
        </div>
        <p className={subtitleStyle}>
          Rp{currentTarget.toLocaleString("id-ID")} / Rp
          {totalTarget.toLocaleString("id-ID")}
        </p>
      </div>
    </div>
  );
}

export default DashboardPinjamanCard;
