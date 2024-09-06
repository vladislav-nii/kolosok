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
            ru: "Основная обработка после пропашных культур состоит из",
          },
          correctAnswer: "Item 3",
          isRequired: "true",
          choices: [
            {
              value: "Item 1",
              text: {
                ru: "лущение на глубину 5–7 см",
              },
            },
            {
              value: "Item 2",
              text: {
                ru: "дискование на глубину 10–12 см",
              },
            },
            {
              value: "Item 3",
              text: {
                ru: "культивации на глубину 10-12 см",
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
