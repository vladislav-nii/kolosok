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
            ru: "Какие оптимальные сроки сева под яровую пшеницу в средних широтах Беларуси?",
          },
          correctAnswer: "Item 1",
          isRequired: "true",
          choices: [
            {
              value: "Item 1",
              text: {
                ru: "с 10 апреля по 5 мая",
              },
            },
            {
              value: "Item 2",
              text: {
                ru: "с 5 мая по 10 июня",
              },
            },
            {
              value: "Item 3",
              text: {
                ru: "с 15 августа по 15 октября",
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
