import { useState } from "react";
import BorderHeader from "../../component/board/BoardHeader";
import BordTable from "../../component/board/BoardTable";
import AddJob from "../../component/board/AddJob/AddJob";
import JobDisplay from "../../component/board/JobDisplay/JobDisplay";

const KanbanBoard = () => {
  const [addJobPop, setAddJobPop] = useState(false);
  const [jobDisplayPop, setJobDisplayPop] = useState(false);

  // That methods for the addJob popup
  const addJobClose = () => {
    setAddJobPop(false);
  };

  const addJobOpen = () => {
    setAddJobPop(true);
  };
  //  //

  // That methods for the jobDisplay popup
  const displayJobClose = () => {
    setJobDisplayPop(false);
  };

  const displayJobOpen = () => {
    setJobDisplayPop(true);
  };
  //  //

  return (
    <div className="flex flex-col h-screen p-2.5 overflow-hidden">
      <BorderHeader popOpenMethod={addJobOpen} />
      <BordTable popOpenMethod={displayJobOpen}/>
      {addJobPop && <AddJob popClosedMethod={addJobClose} />}
      {jobDisplayPop && <JobDisplay popClosedMethod={displayJobClose}/>}
    </div>
  );
};

export default KanbanBoard;
