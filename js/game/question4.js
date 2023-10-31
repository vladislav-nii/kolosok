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
            ru: "Норма высева яровой пшеницы на суглинистых почвах",
          },
          correctAnswer: "Item 2",
          choices: [
            {
              value: "Item 1",
              text: {
                ru: "3,5–4,5 млн. всхожих семян",
              },
            },
            {
              value: "Item 2",
              text: {
                ru: "5,0-5,5 млн. всхожих семян",
              },
            },
            {
              value: "Item 3",
              text: {
                ru: "4,0–4,5 млн. всхожих семян",
              },
            },
          ],
        },
      ],
    },
  ],
};

export const multiplier = 1;
