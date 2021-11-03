import { InitiativeByPkQuery } from "generated"

export default function getScore(data: InitiativeByPkQuery['initiative']){
  const tasksNumber = data?.tasks.length || 0
  const tasksCompleted = data?.tasks.filter(t=>t.status==='completed').length || 0
  const tasksNotCompleted = tasksNumber - tasksCompleted
  const volunteersNumber = data?.volunteers_aggregate?.aggregate?.count || 0
  
  const vScore = 
    tasksNumber === 0 ? 0 :
    (tasksCompleted / tasksNumber * 25) +
    (tasksNumber>10? 12.5: tasksNumber/10*12.5) +
    (volunteersNumber>10? 12.5: volunteersNumber/10*12.5)

  const expensesTotal = data?.expenses.reduce((agg,v)=>agg+v.amount,0) || 0
  const expensesNumber = data?.expenses.length || 0
  const expensesTotalApproved = data?.expenses.filter(t=>t.status==='approved').reduce((agg,v)=>agg+v.amount,0) || 0
  const donationsTotal = data?.donations_aggregate.aggregate?.sum?.amount || 0
  const donationsNumber = data?.donations_aggregate.aggregate?.count || 0

  const dScore = 
    (expensesTotal > donationsTotal?
      donationsTotal/expensesTotal: 
      expensesTotal < donationsTotal?
      expensesTotal/donationsTotal:0)*25 +
    (expensesNumber>10? 12.5: expensesNumber/10*12.5) +
    (donationsNumber>10? 12.5: donationsNumber/10*12.5)
      
  return {
    score:(vScore + dScore)/100,
    collected: data?.donations_aggregate.aggregate?.sum?.amount||0,
    required: data?.expenses.reduce((agg,v)=>agg+v.amount,0) ||0,
    tasksCompleted,
    tasksNumber
  }
}