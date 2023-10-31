//var category_id = document.cookie.replace(/(?:(?:^|.*;\s*)category_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");

export const json = {
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "radiogroup",
          name: "question2",
          title: "Что называют «парным молоком»?",
          correctAnswer: "Item 2",
          choices: [
            {
              value: "Item 1",
              text: "слегка подогретое молоко, когда только начинает идти пар",
            },
            {
              value: "Item 2",
              text: "молоко, которое только что дала корова",
            },
            {
              value: "Item 3",
              text: "молоко, после кипячения",
            },
            {
              value: "Item 4",
              text: "нет верного варианта ответа",
            },
          ],
        },
      ],
    },
  ],
  maxTimeToFinish: 300,
  showTimerPanel: "top",
  widthMode: "responsive",
};

export const multiplier = 1;