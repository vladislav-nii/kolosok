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
            ru: "Фосфорные и калийные удобрения лучше вносить",
          },
          correctAnswer: "Item 1",
          choices: [
            {
              value: "Item 1",
              text: {
                ru: "осенью",
              },
            },
            {
              value: "Item 2",
              text: {
                ru: "весной",
              },
            },
            {
              value: "Item 3",
              text: {
                ru: "летом",
              },
            },
          ],
        },
      ],
    },
  ],
};

export const multiplier = 1;
