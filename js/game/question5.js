//var category_id = document.cookie.replace(/(?:(?:^|.*;\s*)category_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");

export const json = {
  locale: "ru",
  logoPosition: "right",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "radiogroup",
          name: "question1",
          title: {
            ru: "Глубина заделки на легких почвах",
          },
          correctAnswer: "Item 1",
          isRequired: "true",
          choices: [
            {
              value: "Item 1",
              text: {
                ru: "5-6 см",
              },
            },
            {
              value: "Item 2",
              text: {
                ru: "от 3 до 5 см",
              },
            },
            {
              value: "Item 3",
              text: {
                ru: "2–3 см",
              },
            },
          ],
        },
      ],
    },
  ],
  maxTimeToFinish: 15,
  showTimerPanel: "top",
  widthMode: "responsive",
};

export const multiplier = 1;
