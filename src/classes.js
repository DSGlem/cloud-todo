export class TodoItemClass {
  constructor(name, status, priority) {
    this.id = Date.now();
    this.name = name;
    this.status = status;
    this.priority = priority;
  }

  set name(name) {
    if (name.length < 1) {
      throw "priority not valid.";
    }
    this.name = name;
  }
  set priority(priority) {
    if (priorityList.indexOf(priority) === -1) {
      throw "priority not valid.";
    }
    this.priority = priority;
  }
  set status(status) {
    if (statusList.indexOf(status) === -1) {
      throw "status not valid.";
    }
    this.status = status;
  }
}

export const priorityList = [LOW, NORMAL, HIGH, URGENT];
export const statusList = [HOLD, PROGRESS, COMPLETE];

export const LOW = "low",
  NORMAL = "normal",
  HIGH = "high",
  URGENT = "urgent";
export const HOLD = "hold",
  PROGRESS = "progress",
  COMPLETE = "complete";
