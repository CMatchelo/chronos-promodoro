import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);
  const tipsActiveTask = {
    workTime: <span>Foque por {state.config.workTime}</span>,
    shortBreakTime: <span>Descanse por {state.config.shortBreakTime}</span>,
    longBreakTime: <span>Descanso longo</span>,
  };

  const tipsNotActiveTask = {
    workTime: <span>Proximo ciclo é de {state.config.workTime}min</span>,
    shortBreakTime: (
      <span>Proximo ciclo é de {state.config.shortBreakTime}min</span>
    ),
    longBreakTime: <span>Proximo descanso será longo </span>,
  };
  return (
    <>
      {!!state.activeTask && tipsActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsNotActiveTask[nextCycleType]}
    </>
  );
}
