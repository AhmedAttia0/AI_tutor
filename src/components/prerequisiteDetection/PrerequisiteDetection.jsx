import { IoIosCheckmarkCircle, IoIosCloseCircle, IoIosWarning } from "react-icons/io";
import pre from "../../assets/pre.png";
const PrerequisiteDetection = ({ prerequisites }) => {
  if (!prerequisites || prerequisites.length === 0) return null;

  const getStatusData = (mastery) => {
    const numMastery = parseInt(mastery, 10);
    
    if (numMastery >= 81) {
      return {
        status: "mastered",
        container: "bg-green-50 border-green-100",
        title: "text-green-900",
        text: "text-green-700",
        icon: <IoIosCheckmarkCircle className="text-green-500 w-5 h-5" />,
        button: null,
        masterySuffix: ""
      };
    } else if (numMastery >= 50) {
      return {
        status: "review",
        container: "bg-yellow-50 border-yellow-200",
        title: "text-yellow-900",
        text: "text-yellow-700",
        icon: <IoIosWarning className="text-yellow-600 w-5 h-5" />,
        button: "bg-yellow-200 hover:bg-yellow-300 text-yellow-900",
        actionText: "Quick Review",
        masterySuffix: " - Review needed"
      };
    } else {
      return {
        status: "gap",
        container: "bg-red-50 border-red-100",
        title: "text-red-900",
        text: "text-red-700",
        icon: <IoIosCloseCircle className="text-red-500 w-5 h-5" />,
        button: "bg-red-100 hover:bg-red-200 text-red-700 border border-red-200",
        actionText: "Learn First",
        masterySuffix: " - Gap detected"
      };
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-5 border-b border-slate-100 flex items-start gap-3">
        <div className="p-2 bg-gradient-to-b from-[#3B82F6] to-[#1E3A8A]  self-center rounded-lg">
          <img src={pre} className="w-5 h-5" />
        </div>
        <div>
          <h2 className="font-bold text-slate-800 text-lg">Prerequisite Detection</h2>
          <p className="text-sm text-slate-500">Concept dependencies</p>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-3">
        {prerequisites.map((prereq) => {
          const styles = getStatusData(prereq.mastery);
          return (
            <div key={prereq.id} className={`border p-4 rounded-xl flex flex-col gap-3 relative ${styles.container}`}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className={`font-semibold text-sm mb-1 ${styles.title}`}>{prereq.title}</h3>
                  <p className={`text-xs ${styles.text}`}>Mastery: {prereq.mastery}%{styles.masterySuffix}</p>
                </div>
                {styles.icon}
              </div>
              {styles.button && (
                <div>
                  <button className={`text-xs font-semibold px-4 py-1.5 rounded-md transition-colors ${styles.button}`}>
                    {styles.actionText}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PrerequisiteDetection;
