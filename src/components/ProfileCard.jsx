import profile from "../assets/profile.png";

const ProfileCard = () => {
  return (
    <div
      className="
        w-[350px]
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-lg
        shadow-2xl
        overflow-hidden
        flex
        flex-col
        items-center
        p-6
      "
    >
      {/* Circular Profile Image */}
      <div className="relative">
        <img
          src={profile}
          alt="Bikky Kumar"
          className="
            w-64
            h-64
            rounded-full
            object-cover
            object-top
            border-4
            border-blue-500
            shadow-[0_0_30px_rgba(59,130,246,0.6)]
          "
        />

        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl -z-10"></div>
      </div>

      {/* Text */}
      <div className="text-center mt-6">
        <h3 className="text-3xl font-bold text-white">
          Bikky Kumar
        </h3>

        <p className="text-blue-400 mt-2 text-lg">
          MERN Stack Developer
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;