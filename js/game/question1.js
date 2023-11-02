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
            ru: "Лучший предшественник для яровой пшеницы из ниже перечисленных – это",
          },
          correctAnswer: "Item 3",
          isRequired: "true",
          choices: [
            {
              value: "Item 1",
              text: {
                ru: "озимая рожь",
              },
            },
            {
              value: "Item 2",
              text: {
                ru: "ячмень",
              },
            },
            {
              value: "Item 3",
              text: {
                ru: "картофель",
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
