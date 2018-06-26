export const tasksSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Task name",
    max: 20,
	min : 3
  },
  content: {
    type: String,
    label: "Task description",
	max: 20,
	min : 0
  },
});

