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
            ru: "Для минимизации потерь урожая, уборку следует начинать при достижении зерна влажностью",
          },
          correctAnswer: "Item 1",
          isRequired: "true",
          choices: [
            {
              value: "Item 1",
              text: {
                ru: "14-16 %",
              },
            },
            {
              value: "Item 2",
              text: {
                ru: "17-20 %",
              },
            },
            {
              value: "Item 3",
              text: {
                ru: "35-25 %",
              },
            },
          ],
        },
      ],
    },
  ],
  maxTimeToFinish: 30,
  showTimerPanel: "top",
  widthMode: "responsive",
};

export const multiplier = 1;
