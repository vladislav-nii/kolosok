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
            ru: "Какие удобрения вносят под предпосевную культивацию?",
          },
          correctAnswer: "Item 3",
          choices: [
            {
              value: "Item 1",
              text: {
                ru: "азотные удобрения в дозе от 80 до 120 кг",
              },
            },
            {
              value: "Item 2",
              text: {
                ru: "калийные удобрения в дозе от 80 до 140 кг",
              },
            },
            {
              value: "Item 3",
              text: {
                ru: "азотные удобрения в дозе 45–90 кг/га",
              },
            },
          ],
        },
      ],
    },
  ],
};

export const multiplier = 1;
