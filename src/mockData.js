import { v4 as uuidv4 } from "uuid";

const mockData = [
  {
    id: uuidv4(),
    title: "⬜ To do",
    tasks: [
      {
        id: uuidv4(),
        title: "Learn Javascript",
      },
      {
        id: uuidv4(),
        title: "Learn Git",
      },
      {
        id: uuidv4(),
        title: "Learn CSS",
      },
      {
        id: uuidv4(),
        title: "Learn Python",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "📝 In Progress",
    tasks: [
      {
        id: uuidv4(),
        title: "Learn SASS",
      },
      {
        id: uuidv4(),
        title: "Learn React",
      },
      {
        id: uuidv4(),
        title: "Learn Django",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "✅ Completed",
    tasks: [
      {
        id: uuidv4(),
        title: "Learn Next",
      },
      {
        id: uuidv4(),
        title: "Learn Tailwindcss",
      },
      {
        id: uuidv4(),
        title: "Learn Native",
      },
    ],
  },
];

export default mockData;
